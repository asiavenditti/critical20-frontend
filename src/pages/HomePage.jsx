import Jumbotron from '../components/Jumbotron'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function HomePage() {
    const [games, setGames] = useState([]);
    const url = "http://localhost:3030/api/products";
    const img = "/img/logo_sito_-removebg-preview.png";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                setGames(shuffled.slice(0, 6));
            });
    }, []);

    // Funzione per dividere l'array in gruppi da 3
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
            <a className="d-flex justify-content-center sfondo positionR" href="#">
                <img
                    src="img/logo_sito_-removebg-preview.png"
                    alt="Logo"
                    height={200}
                    width=""
                    className="positionA"
                />
            </a>
            <Jumbotron />
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
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
                    ))}
                </div>

                {/* Controlli */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Precedente</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Successivo</span>
                </button>
            </div>
        </div>
    );
}