import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Relatedgames({ categoryId }) {
  const [games, setGames] = useState([]);

  const url_categories = `http://localhost:3030/api/categories/${categoryId}`;

  useEffect(() => {
    if (!categoryId) return;

    fetch(url_categories)
      .then((res) => res.json())
      .then((data) => {
        // Mischia e prendi massimo 6
        const shuffled = data.sort(() => 0.5 - Math.random());
        setGames(shuffled.slice(0, 6));
      })
      .catch((err) => console.error("Errore fetch correlati:", err));
  }, [categoryId, url_categories]);

  // Funzione per dividere array in gruppi
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(games, 3);

  return (
    <div>
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container mb-5 mt-5">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row">
                {slide.map((game) => (
                  <div key={game.id} className="col-md-4">
                    <div className="card bg-light h-100 mb-3">
                      <img
                        src={`/img/${
                          game.img || "logo_sito_-removebg-preview.png"
                        }`}
                        alt={game.name}
                        className="mx-auto d-block mt-3"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{game.name}</h5>
                        <p className="card-text">{game.description}</p>
                        <p className="card-text">
                          {game.price !== game.original_price ? (
                            <>
                              <span className="text-muted text-decoration-line-through me-2">
                                €{game.original_price}
                              </span>
                              <span className="fw-bold text-success">
                                €{game.price}
                              </span>
                            </>
                          ) : (
                            <span className="fw-bold">€{game.price}</span>
                          )}
                        </p>
                        <Link
                          to={`/products/${game.id}`}
                          className="btn btn-primary"
                        >
                          Vai al gioco
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controlli */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Precedente</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Successivo</span>
        </button>
      </div>
    </div>
  );
}
