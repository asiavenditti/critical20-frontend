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
    <>
      <div className="container d-flex justify-content-center containercarddetails mt-5">
        <div className="card mb-3" style={{ maxWidth: 900 }}>
          <div className="row g-0">
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
                  className="card-body bg-white bg-opacity-50 text-dark shadow rounded-3"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div className="row">
                    {/* Colonna immagine */}
                    <div className="col-6 d-flex align-items-center">
                      <img
                        src="/img/Ticket_to_Ride_Northern_Lights_box-1024x1024.webp"
                        className="img-fluid rounded-start"
                        alt="Immagine prodotto"
                        style={{ width: "100%" }}
                      />
                    </div>

                    {/* Colonna con i primi 4 dati */}
                    <div className="col-6">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">
                        <strong>Età:</strong> a partire dai {age}
                      </p>
                      <p className="card-text">
                        <strong>Giocatori: </strong>
                        {players}
                      </p>
                      <p className="card-text">
                        <strong>Durata:</strong> {duration}
                      </p>
                      <p className="card-text">
                        <strong>Lingua: </strong>
                        {language}
                      </p>
                      <p className="card-text">
                        <strong>Difficoltà: </strong>
                        {difficulty}
                      </p>

                      <p>
                        <strong>Categorie:</strong>
                      </p>
                      <ul>
                        {categories?.map((category, index) => (
                          <li key={index}>{category}</li>
                        ))}
                      </ul>

                      <p className="card-text">
                        <strong>Isbn: </strong> {isbn}
                      </p>
                    </div>
                  </div>

                  {/* Resto delle informazioni sotto */}
                  <div className="row mt-3">
                    <div className="col-12">
                      <p className="card-text">
                        <strong>Editore: </strong> {editor}
                      </p>
                      <p className="card-text">
                        <strong>Descrizione: </strong>
                        {description}
                      </p>
                      <p className="card-text text-decoration-line-through text-secondary">
                        Prezzo: {original_price}
                      </p>
                      <p className="card-text fs-5">
                        <strong>Prezzo:</strong> {price}
                      </p>
                      <a href="#" className="btn btn-primary">
                        Aggiungi al carrello
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <section>inserire parte con Descrizione lunga ed eventuali FAQ</section>
        <p>bella foto con qualcosa di bello</p>
        <p>carosello prodotti correlati</p>
      </div>
    </>
  );
}
