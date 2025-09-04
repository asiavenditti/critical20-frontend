import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DetailsProductPage() {
  //   const { id } = useParams();
  //   const productId = Number(id);

  //   const api_product = `http://localhost:3030/api/products/ ${productId}`;

  //   useEffect(() => {
  //     fetch(api_product)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="container d-flex   d-flex justify-content-center containercarddetails  mt-5">
        <div className="row d-flex">
          <div className="col-md-6">
            <div className="card">
              <img
                src="/img/azul.png"
                className="card-img-top h-75 w-75"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card orizzontale  */}
        <div className="card mb-3" style={{ maxWidth: 800 }}>
          <div className="row g-0">
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
                <h5 className="card-title">Nome Prodotto</h5>
                <p className="card-text">
                  <strong>Prezzo:</strong> €49,99
                </p>
                <p className="card-text">
                  <strong>Descrizione:</strong> Questo prodotto è realizzato con
                  materiali di alta qualità, perfetto per ogni occasione.
                </p>
                <p className="card-text">
                  <strong>Disponibilità:</strong> In stock
                </p>
                <a href="#" className="btn btn-primary">
                  Aggiungi al carrello
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
