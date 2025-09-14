import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import "@flaticon/flaticon-uicons/css/all/all.css";

import Relatedgames from "../components/Relatedgames";
import BtnWishlist from "../components/BtnWishlist";
import PageNotFoundProduct from "./PageNotFoundProduct";

import "../style/DetailProductPage.css";

export default function DetailsProductPage() {
  const { productCart, setProductCart, triggerAlert } = useOutletContext();
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);
  const [fade, setFade] = useState(false);

  const messageCart = " aggiunto al carrello!";

  useEffect(() => {
    fetch(`http://localhost:3030/api/products/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore server: risposta non OK");
        return res.json();
      })
      .then((data) => {
        setGame(data);
        setMainImage(data.file_paths?.[0] || "fallback-image.jpg");
        setError(null);
      })
      .catch(() => setError("Impossibile caricare il prodotto."));
  }, [slug]);

  useEffect(() => {
    if (game?.id_category && game.id_category.length > 0) {
      setCategory(Number(game.id_category[0]));
    } else {
      setCategory(null);
    }
  }, [game]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!game && !error) {
    return (
      <main className="mn_100 d-flex justify-content-center align-items-center">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return <PageNotFoundProduct slug={slug} />;
  }

  return (
    <main className="mn_100">
      <div id="details-product-page" className="container py-5">
        <div className="containercard py-5">
          <div
            className="card shadow-lg border-0 rounded-4 overflow-hidden"
            style={{ backgroundColor: "#f9f9f9", color: "#222" }}
          >
            <div className="row g-0">
              <div className="d-flex justify-content-end">
                <BtnWishlist game={game} />
              </div>

              <div className="row g-0">
                {/* Colonna immagine */}
                <div className="col-md-5 bg-light d-flex flex-column align-items-center justify-content-start p-3">
                  <div className="product-image-box mb-3">
                    <img
                      src={hoverImage || mainImage}
                      alt={game.name}
                      className={`main-image ${fade ? "fade-out" : "fade-in"}`}
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="thumbnail-row d-flex justify-content-center mt-2">
                    {game.file_paths?.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${game.name} thumbnail ${idx}`}
                        className={`thumbnail-img ${
                          mainImage === img ? "active" : ""
                        }`}
                        onClick={() => {
                          setFade(true);
                          setTimeout(() => {
                            setMainImage(img);
                            setHoverImage(null);
                            setFade(false);
                          }, 200);
                        }}
                        onMouseEnter={() => setHoverImage(img)}
                        onMouseLeave={() => setHoverImage(null)}
                      />
                    ))}
                  </div>
                </div>

                {/* Colonna dettaglio */}
                <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <h2 className="fw-bold mb-3">{game.name}</h2>

                    {/* Badge info rapide */}
                    <div className="mb-2">
                      <span className="badge bg-black me-2">
                        Età: {game.age}+
                      </span>
                      <span className="badge bg-black me-2">
                        Giocatori: {game.players}
                      </span>
                      <span className="badge bg-black me-2">
                        Durata: {game.duration}'
                      </span>
                      <span className="badge bg-black me-2">
                        Lingua: {game.language}
                      </span>
                    </div>

                    <p className="mt-3 mb-1">
                      <strong>Difficoltà:</strong>{" "}
                      <span className="badge bg-success text-white">
                        {game.difficulty}
                      </span>
                    </p>

                    <p>
                      <strong>ISBN:</strong> {game.isbn}
                    </p>

                    <hr />

                    <p>
                      <strong>Categorie:</strong>
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {game.categories?.map((cat, i) => (
                        <span key={i} className="badge rounded-pill bg-primary">
                          {typeof cat === "object" ? cat.name : cat}
                        </span>
                      ))}
                    </div>

                    <hr />

                    <p>
                      <strong>Editore:</strong> {game.editor}
                    </p>
                    <p className="w-50">
                      <strong>Descrizione:</strong>
                      <br />
                      {game.description}
                    </p>
                  </div>

                  {/* Prezzo e Carrello */}
                  <div className="mt-3">
                    {game.price !== game.original_price ? (
                      <>
                        <span className="text-muted text-decoration-line-through me-2">
                          Prezzo pieno: €
                          {Number(game.original_price).toFixed(2)}
                        </span>
                        <h4 className="fw-bold text-danger">
                          Prezzo scontato: €{Number(game.price).toFixed(2)}
                        </h4>
                      </>
                    ) : (
                      <h4 className="fw-bold">
                        Prezzo: €{Number(game.price).toFixed(2)}
                      </h4>
                    )}

                    <button
                      className="btn btn-dark btn-lg mt-2 w-100"
                      onClick={() => {
                        const existingIndex = productCart.findIndex(
                          (p) => p.id === game.id
                        );
                        if (existingIndex !== -1) {
                          const newCart = [...productCart];
                          newCart[existingIndex].quantity += 1;
                          setProductCart(newCart);
                        } else {
                          setProductCart([
                            ...productCart,
                            { ...game, quantity: 1 },
                          ]);
                        }
                        triggerAlert(`${game.name}${messageCart} ✅`);
                      }}
                    >
                      <FontAwesomeIcon icon={faCartPlus} /> Aggiungi al carrello
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prodotti correlati */}
          <div className="container  py-4">
            <h3
              className="text-light mb-4 text-center fw-semibold"
              style={{ fontSize: "1.8rem" }}
            >
              Ti consigliamo anche...
            </h3>
            <Relatedgames categoryId={category} />
          </div>
        </div>
      </div>
    </main>
  );
}
