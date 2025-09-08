import Jumbotron from '../components/Jumbotron';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalEmail from "../components/ModalEmail";

export default function HomePage() {
    const [games, setGames] = useState([]);
    const url = "http://localhost:3030/api/products/new";
    const img = "/img/logo_sito_-removebg-preview.png";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // mostra solo 4 card
                setGames(data.slice(0, 4));
            });
    }, []);

    return (
        <div>
            {/* Logo centrale*/}
            <a className="d-flex justify-content-center sfondo positionR" href="#">
                <img
                    src="img/logo_sito_-removebg-preview.png"
                    alt="Logo"
                    height={200}
                    className="positionA"
                />
            </a>

            {/* Jumbotron senza margini extra */}
            <Jumbotron />

            {/* Sezione nuovi arrivi */}
            <div className="container mb-5 mt-5">
                <div className="row">
                    <h1 className="text-light text-center mb-4 mt-2">- I NUOVI ARRIVI -</h1>
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex"
                        >
                            <div
                                className="card bg-light w-100 d-flex flex-column custom-card-padding"
                            >
                                <img
                                    src={img}
                                    alt={game.name}
                                    className="mx-auto d-block mt-3"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="card-body d-flex flex-column text-center">
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
                                    <div className="mt-auto">
                                        {/* Link al dettaglio o azione */}
                                        <Link to={`/products/${game.id}`} className="btn btn-primary">
                                            Vai al gioco
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
