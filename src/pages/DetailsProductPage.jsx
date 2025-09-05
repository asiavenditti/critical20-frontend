import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailsProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const api_product = `http://localhost:3030/api/products/${productId}`;
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(api_product)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGame(data);
      });
  }, [api_product]);

  return (
    <div className="container my-5">
      {game?.map(
        ({
          id,
          name,
          description,
          original_price,
          price,
          language,
          duration,
          difficulty,
          isbn,
          players,
          editor,
          age,
          categories,
        }) => (
          <div
            key={id}
            className="card shadow-lg border-0 rounded-4 overflow-hidden"
            style={{
              backgroundColor: "#f9f9f9",
              color: "#222",
            }}
          >
            <div className="row g-0">
              {/* Image Section */}
              <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
                <img
                  src="/img/Ticket_to_Ride_Northern_Lights_box-1024x1024.webp"
                  className="img-fluid rounded"
                  alt="Immagine prodotto"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "450px",
                  }}
                />
              </div>

              {/* Info Section */}
              <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                <div>
                  <h2 className="fw-bold mb-3">{name}</h2>

                  <div className="mb-2">
                    <span className="badge bg-secondary lh-base me-2">
                      Età: {age}+
                    </span>
                    <span className="badge bg-secondary lh-base me-2">
                      Giocatori: {players}
                    </span>
                    <span className="badge bg-secondary lh-base me-2">
                      Durata: {duration}
                    </span>
                    <span className="badge bg-secondary lh-base me-2">
                      Lingua: {language}
                    </span>
                  </div>

                  <p className="mt-3 mb-1">
                    <strong>Difficoltà:</strong>{" "}
                    <span className="badge bg-success text-dark lh-base">
                      {difficulty}
                    </span>
                  </p>
                  <p>
                    <strong>ISBN:</strong> {isbn}
                  </p>

                  <hr />

                  <p>
                    <strong>Categoria:</strong>
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {categories?.map((category, index) => (
                      <span
                        key={index}
                        className="badge rounded-pill bg-primary text-white lh-base"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <hr />

                  <p>
                    <strong>Editore:</strong> {editor}
                  </p>
                  <p className="mb-4">
                    <strong>Descrizione:</strong>
                    <br />
                    {description}
                  </p>
                </div>

                {/* Prezzo e CTA */}
                <div className="mt-3">
                  <p className="text-muted text-decoration-line-through mb-0">
                    Prezzo originale: €{original_price}
                  </p>
                  <h4 className="text-danger fw-bold">
                    Prezzo scontato: €{price}
                  </h4>

                  <button className="btn btn-dark btn-lg mt-2 w-100">
                    🛒 Aggiungi al carrello
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      {/* Extra content placeholder */}
      <div className="container mt-5">
        <section>
          <h4>Descrizione lunga</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
            amet arcu ut mauris cursus accumsan.
          </p>

          <h5 className="mt-4">FAQ</h5>
          <ul>
            <li>Quando viene consegnato?</li>
            <li>È disponibile in altre lingue?</li>
          </ul>

          <div className="mt-5">
            <h4>Prodotti Correlati</h4>
            <p>[Carosello in costruzione]</p>
          </div>
        </section>
      </div>
    </div>
  );
}
