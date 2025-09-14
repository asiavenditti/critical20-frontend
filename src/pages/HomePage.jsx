import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import ModalEmail from "../components/ModalEmail";

export default function HomePage() {
  const { triggerAlert } = useOutletContext();
  const [games, setGames] = useState([]);
  const url = "http://localhost:3030/api/products/new";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGames(data.slice(0, 4)));
  }, []);

  return (
    <div>
      {/* Logo centrale */}
      <div className="d-flex justify-content-center sfondo positionR ">
        <img
          src="img/logo_sito_-removebg-preview.png"
          alt="Logo"
          height={200}
          className="positionA"
        />
      </div>

      <Jumbotron />

      <div className="container mb-5 mt-5">
        <div className="row">
          <h1 className="text-light text-center mb-4 mt-2">
            - I NUOVI ARRIVI -
          </h1>
          {games.map((game) => (
            <div
              key={game.id}
              className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex"
            >
              <Link
                to={`/products/${game.slug}`}
                className="text-decoration-none w-100"
              >
                <div className="card bg-light custom-card w-100 d-flex flex-column position-relative overflow-hidden p-3">
                  <img
                    src={game.file_paths[0]}
                    alt={game.name}
                    className="mx-auto d-block"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="card-title text-center mt-2 text-dark">
                    {game.name}
                  </h5>
                  <p className="card-text text-center fw-bold text-success">
                    {game.price !== game.original_price ? (
                      <>
                        <span className="text-muted text-decoration-line-through me-2">
                          €{game.original_price}
                        </span>
                        €{game.price}
                      </>
                    ) : (
                      <>€{game.price}</>
                    )}
                  </p>

                  <div className="description-overlay d-flex justify-content-center align-items-center text-center">
                    <p className="text-white">{game.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Barra scorrevole fissa in basso */}
      <div className="wrapper-scrolling-text">
        <div className="scrolling-text">
          <span>
            🎲 Nuovi Giochi in arrivo! 🚀 | Offerte speciali fino al 50%! 🔥 |
            Spedizione gratuita sopra i 50€ 🛒 | Scopri ora 👉
          </span>
          <span>
            🎲 Nuovi Giochi in arrivo! 🚀 | Offerte speciali fino al 50%! 🔥 |
            Spedizione gratuita sopra i 50€ 🛒 | Scopri ora 👉
          </span>
        </div>
      </div>
    </div>
  );
}
