import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Relatedgames({ categoryId }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // reset quando cambia categoryId
    setGames([]);

    if (!categoryId) return;

    const url = `http://localhost:3030/api/categories/${categoryId}`;
    console.log("Relatedgames: fetch", url, "categoryId:", categoryId);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Relatedgames rawData:", data);

        // Normalizza la risposta in un array di 'record'
        let records;
        if (Array.isArray(data)) {
          records = data;
        } else if (data && typeof data === "object") {
          if (Array.isArray(data.data)) records = data.data;
          else if (Array.isArray(data.categories)) records = data.categories;
          else records = [data];
        } else {
          records = [];
        }

        // Helper: riconosce un "prodotto" minimo
        const looksLikeProduct = (o) =>
          o && typeof o === "object" && ("id" in o || "name" in o);

        // Estrai tutti gli array di prodotti possibili dai record
        let allProducts = [];
        // caso: records è già un array di prodotti
        if (
          records.length > 0 &&
          looksLikeProduct(records[0]) &&
          !records.some((r) => Object.values(r).some((v) => Array.isArray(v)))
        ) {
          allProducts = records;
        } else {
          allProducts = records.flatMap((rec) => {
            if (!rec || typeof rec !== "object") return [];
            // preferisci la proprietà esplicita 'products'
            if (Array.isArray(rec.products)) return rec.products;
            // altrimenti cerca la prima proprietà che sia un array di oggetti (es. 'items', 'games', ecc.)
            const arrProp = Object.keys(rec).find(
              (k) =>
                Array.isArray(rec[k]) &&
                rec[k].length > 0 &&
                typeof rec[k][0] === "object"
            );
            if (arrProp) return rec[arrProp];
            return [];
          });
        }

        console.log("Relatedgames extracted products:", allProducts);

        // rimuovi duplicati per id (se presenti)
        const unique = allProducts.filter(
          (v, i, a) => v && v.id && a.findIndex((x) => x.id === v.id) === i
        );

        // shuffle sicuro (Fisher-Yates)
        const shuffle = (arr) => {
          const a = arr.slice();
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        };

        const picked = shuffle(unique).slice(0, 6);
        setGames(picked);
      })
      .catch((err) => {
        console.error("Errore fetch correlati:", err);
        setGames([]); // sicurezza UI
      });
  }, [categoryId]);

  // chunk per il carosello
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(games, 3);

  if (games.length === 0) {
    return (
      <p className="text-center my-4">Nessun prodotto correlato trovato.</p>
    );
  }

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
