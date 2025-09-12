import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Relatedgames from "../components/Relatedgames";

export default function DetailsProductPage() {
  // Outlet context con carrello, wishlist e triggerAlert
  const { productCart, setProductCart, wishlist, setWishlist, triggerAlert } =
    useOutletContext();

  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  const messageCart = " aggiunto al carrello!"
  const messageWishlist = " aggiunto ai preferiti! "

  // Effetto per caricare il prodotto quando cambia lo slug
  useEffect(() => {
    fetch(`http://localhost:3030/api/products/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore server: risposta non OK");
        }
        return res.json();
      })
      .then((data) => {
        setGame(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Errore fetch:", err);
        setError("Impossibile caricare il prodotto.");
      });
  }, [slug]);

  // Effetto per ottenere la categoria numerica da game.id_category
  useEffect(() => {
    if (game?.id_category && game.id_category.length > 0) {
      setCategory(Number(game.id_category[0]));
    } else {
      setCategory(null);
    }
  }, [game]);

  // Scrolla all’inizio della pagina quando cambia lo slug
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Mostra messaggio di caricamento
  if (!game && !error) {
    return <p className="text-center my-5">Caricamento in corso...</p>;
  }

  // In caso di errore nella fetch
  if (error) {
    return <p className="text-center text-danger my-5">{error}</p>;
  }

  // Funzione per aggiungere/rimuovere dai preferiti (wishlist)
  const toggleWishlist = () => {
    const isInWishlist = wishlist.some((p) => p.id === game.id);

    if (isInWishlist) {
      setWishlist(wishlist.filter((p) => p.id !== game.id));
    } else {
      setWishlist([...wishlist, game]);
    }
  };

  // Verifico se il prodotto è nei preferiti per cambiare l’icona
  const isFavorite = wishlist.some((p) => p.id === game.id);

  return (
    <div className="container">
      <div className="containercard my-5 py-5">
        <div
          className="card shadow-lg border-0 rounded-4 overflow-hidden"
          style={{ backgroundColor: "#f9f9f9", color: "#222" }}
        >
          <div className="row g-0">
            <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3 position-relative">
              <img
                src={game.file_paths?.[0] || "fallback-image.jpg"}
                alt={game.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "450px",
                }}
              />
              <button
                className="btn position-absolute top-0 end-0 m-3 fs-4 text-danger"
                onClick={() => {
                  toggleWishlist
                  triggerAlert(`${game.name}${messageWishlist} ✅`);
                }}
                title={
                  isFavorite
                    ? "Rimuovi dai preferiti"
                    : "Aggiungi ai preferiti"
                }
              >
                <FontAwesomeIcon
                  className={isFavorite ? "text-danger" : "text-secondary"}
                  icon={faHeart}
                />
              </button>
            </div>

            {/* Colonna dettaglio gioco */}
            <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-3">{game.name}</h2>

                {/* Badge info rapide */}
                <div className="mb-2">
                  <span className="badge bg-secondary me-2">
                    Età: {game.age}+
                  </span>
                  <span className="badge bg-secondary me-2">
                    Giocatori: {game.players}
                  </span>
                  <span className="badge bg-secondary me-2">
                    Durata: {game.duration}'
                  </span>
                  <span className="badge bg-secondary me-2">
                    Lingua: {game.language}
                  </span>
                </div>

                <p className="mt-3 mb-1">
                  <strong>Difficoltà:</strong>{" "}
                  <span className="badge bg-success text-dark">
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

              {/* Sezione prezzo e Carrello con alert */}
              <div className="mt-3">
                {game.price !== game.original_price ? (
                  <>
                    <span className="text-muted text-decoration-line-through me-2">
                      Prezzo pieno: €{Number(game.original_price).toFixed(2)}
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
                    // Aggiungi al carrello
                    const existingIndex = productCart.findIndex(
                      (p) => p.id === game.id
                    );

                    if (existingIndex !== -1) {
                      const newCart = [...productCart];
                      newCart[existingIndex].quantity += 1;
                      setProductCart(newCart);
                    } else {
                      setProductCart([...productCart, { ...game, quantity: 1 }]);
                    }

                    // Trigger alert globale
                    triggerAlert(`${game.name}${messageCart} ✅`);
                  }}
                >
                  🛒 Aggiungi al carrello
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prodotti correlati */}
      <div className="container mt-5 py-4">
        <h3
          className="text-light mb-4 text-center fw-semibold"
          style={{ fontSize: "1.8rem" }}
        >
          Ti consigliamo anche...
        </h3>
        <Relatedgames categoryId={category} />
      </div>
    </div>
  );
}
