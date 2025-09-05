import Jumbotron from '../components/Jumbotron'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [games, setGames] = useState([]);
    const url = "http://localhost:3030/api/products/new";
    const img = "/img/logo_sito_-removebg-preview.png";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // Prendi solo i primi 4 nuovi arrivi (o quelli che vuoi)
                setGames(data.slice(0, 4));
            });
    }, []);

    return (
        <div>
            <a className="d-flex justify-content-center sfondo positionR" href="#">
                <img
                    src="img/logo_sito_-removebg-preview.png"
                    alt="Logo"
                    height={200}
                    className="positionA"
                />
            </a>
            <Jumbotron />

            {/* Container statico con 4 card */}
            <div className="container mb-5 mt-5">
                <div className="row">
                    <h1 className='text-light text-center mb-4 mt-2'> - I NUOVI ARRIVI -</h1>
                    {games.map((game) => (
                        <div key={game.id} className="col-md-3"> {/* 4 colonne uguali */}
                            <div className="card bg-light h-100 mb-3">
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
                                    <Link to="/" className="btn btn-primary">
                                        Vai al gioco
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
