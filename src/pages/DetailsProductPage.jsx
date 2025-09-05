import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailsProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const api_product = `http://localhost:3030/api/products/${productId}`;

  const [game, setGame] = useState([]);

  useEffect(() => {
    fetch(api_product)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGame(data);
      });
  }, []);

  return (
    <>
      {/* Container principale */}
      <div className="container d-flex justify-content-center containercarddetails mt-5">
        {/* Card orizzontale */}
        <div className="card mb-3" style={{ maxWidth: 800 }}>
          <div className="row g-0">
            {game?.map(
              ({
                id,
                name,
                description,
                original_price,
                price,
                language,
                category,
                duration,
                difficulty,
                isbn,
                players,
                editor,
              }) => {
                return (
                  <div key={id} className="d-flex w-100">
                    {/* Immagine a sinistra */}
                    <div className="col-md-4">
                      <img
                        src="/img/azul.png"
                        className="img-fluid rounded-start"
                        alt="Immagine prodotto"
                      />
                    </div>

                    {/* Dettagli a destra */}
                    <div className="col-md-8">
                      <div className="card-body text-white">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-decoration-line-through ">
                          Prezzo:
                          {original_price}
                        </p>
                        <p className="card-text">
                          <strong>Prezzo:</strong>
                          {price}
                        </p>
                        <p className="card-text">
                          <strong>Descrizione:</strong>
                          {description}
                        </p>
                        <p className="card-text">
                          <strong>Lingua:</strong>
                          {language}
                        </p>
                        <p className="card-text">
                          <strong>Categoria:</strong> {category}
                        </p>
                        <p className="card-text">
                          <strong>Durata:</strong> {duration}
                        </p>
                        <p className="card-text">
                          <strong>Difficoltà:</strong>
                          {difficulty}
                        </p>
                        <p className="card-text">
                          <strong>Isbn:</strong> {isbn}
                        </p>
                        <p className="card-text">
                          <strong>Giocatori:</strong>
                          {players}
                        </p>
                        <p className="card-text">
                          <strong>Editore:</strong> {editor}
                        </p>
                        <a href="#" className="btn btn-primary">
                          Aggiungi al carrello
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Sezione con eventuali parti aggiuntive */}
      <div className="container mt-4">
        <section>inserire parte con Descrizione lunga ed eventuali FAQ</section>

        {/* Elemento grafico statico */}
        <p>bella foto con qualcosa di bello</p>

        {/* Carosello con prodotti correlati */}
        <p>carosello prodotti correlati</p>
      </div>
    </>
  );
}
