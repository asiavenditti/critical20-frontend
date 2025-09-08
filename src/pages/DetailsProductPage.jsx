import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Component
import Relatedgames from "../components/Relatedgames";

export default function DetailsProductPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [category, setCategory] = useState(null);
  const img = "/img/logo_sito_-removebg-preview.png"

  const url = `http://localhost:3030/api/products/${id}`;

  // Fetch product
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGame(data[0]))
      .catch((err) => console.error("Errore fetch:", err));
  }, [id, url]);

  // Imposta la prima categoria
  useEffect(() => {
    if (game?.id_category?.length > 0) {
      setCategory(Number(game.id_category[0]));
    } else {
      setCategory(null);
    }
  }, [game]);

  // aggiungenre loader
  if (!game) {
    return <p className="text-center my-5">Caricamento in corso...</p>;
  }

  return (
    <div className="container">
      <div className="containercard my-5 py-5">
        {/* Product Card  */}
        <div
          className="card shadow-lg border-0 rounded-4 overflow-hidden "
          style={{ backgroundColor: "#f9f9f9", color: "#222" }}
        >
          <div className="row g-0">
            {/* Immagine */}
            <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
              <img
                // src={`/img/${game.img}`}
                src={img}
                className="img-fluid rounded"
                alt={game.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "450px",
                }}
              />
            </div>

            {/* Info */}
            <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-3">{game.name}</h2>

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
                      {cat}
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

              {/* Prezzo */}
              <div className="mt-3">
                <p className="text-muted text-decoration-line-through mb-0">
                  Prezzo originale: €{game.original_price}
                </p>
                <h4 className="text-danger fw-bold">
                  Prezzo scontato: €{game.price}
                </h4>
                <button className="btn btn-dark btn-lg mt-2 w-100">
                  🛒 Aggiungi al carrello
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Prodotti correlati */}
      <div className="container mt-5 py-4">
        <h3 className="text-light mb-4 text-center fw-semibold" style={{ fontSize: "1.8rem" }}>
          Ti consigliamo anche...
        </h3>
        <Relatedgames categoryId={category} />
      </div>
    </div>
  );
}
