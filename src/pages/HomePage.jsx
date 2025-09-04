import React from 'react'
import Jumbotron from '../components/Jumbotron'


export default function HomePage() {
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
            <main>
                {/* Card Section */}
                <section className="py-5 SecCard">
                    <div className="container">
                        <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
                            {/* Indicatori */}
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#cardCarousel"
                                    data-bs-slide-to={0}
                                    className="active"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#cardCarousel"
                                    data-bs-slide-to={1}
                                />
                            </div>
                            {/* Wrapper */}
                            <div className="carousel-inner">
                                {/* Primo gruppo di 3 card */}
                                <div className="carousel-item active">
                                    <div className="row g-4">
                                        {/* Card 1 */}
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center shadow-sm">
                                                <div className="img-container">
                                                    <img
                                                        src="img/risiko.jpg"
                                                        className="card-img-top"
                                                        alt="Gioco 1"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Titolo Card 1</h5>
                                                    <p className="card-text">
                                                        Un po' di testo di esempio per questa card.
                                                    </p>
                                                    <p className="fw-bold fs-5">
                                                        <span className="text-danger">€19,99</span>
                                                        <span className="text-muted text-decoration-line-through">
                                                            €29,99
                                                        </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">
                                                        Dettagli
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 2 */}
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center shadow-sm">
                                                <div className="img-container">
                                                    <img
                                                        src="img/carcassonne.jpg"
                                                        className="card-img-top"
                                                        alt="Gioco 2"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Titolo Card 2</h5>
                                                    <p className="card-text">
                                                        Un po' di testo di esempio per questa card.
                                                    </p>
                                                    <p className="fw-bold fs-5">
                                                        <span className="text-danger">€29,99</span>
                                                        <span className="text-muted text-decoration-line-through">
                                                            €39,99
                                                        </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">
                                                        Dettagli
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 3 */}
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center shadow-sm">
                                                <div className="img-container">
                                                    <img
                                                        src="img/azul.png"
                                                        className="card-img-top"
                                                        alt="Gioco 3"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Titolo Card 3</h5>
                                                    <p className="card-text">
                                                        Un po' di testo di esempio per questa card.
                                                    </p>
                                                    <p className="fw-bold fs-5">
                                                        <span className="text-danger">€19,99</span>
                                                        <span className="text-muted text-decoration-line-through">
                                                            €29,99
                                                        </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">
                                                        Dettagli
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Secondo gruppo di 3 card */}
                                <div className="carousel-item">
                                    <div className="row g-4">
                                        {/* Card 4 */}
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center shadow-sm">
                                                <div className="img-container">
                                                    <img
                                                        src="img/gioco1.jpg"
                                                        className="card-img-top"
                                                        alt="Gioco 4"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Titolo Card 4</h5>
                                                    <p className="card-text">
                                                        Un po' di testo di esempio per questa card.
                                                    </p>
                                                    <p className="fw-bold fs-5">
                                                        <span className="text-danger">€19,99</span>
                                                        <span className="text-muted text-decoration-line-through">
                                                            €29,99
                                                        </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">
                                                        Dettagli
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 5 */}
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center shadow-sm">
                                                <div className="img-container">
                                                    <img
                                                        src="img/gioco2.jpg"
                                                        className="card-img-top"
                                                        alt="Gioco 5"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Titolo Card 5</h5>
                                                    <p className="card-text">
                                                        Un po' di testo di esempio per questa card.
                                                    </p>
                                                    <p className="fw-bold fs-5">
                                                        <span className="text-danger">€24,99</span>
                                                        <span className="text-muted text-decoration-line-through">
                                                            €39,99
                                                        </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">
                                                        Dettagli
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 6 */}
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center shadow-sm">
                                                <div className="img-container">
                                                    <img
                                                        src="img/gioco3.jpg"
                                                        className="card-img-top"
                                                        alt="Gioco 6"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Titolo Card 6</h5>
                                                    <p className="card-text">
                                                        Un po' di testo di esempio per questa card.
                                                    </p>
                                                    <p className="fw-bold fs-5">
                                                        <span className="text-danger">€14,99</span>
                                                        <span className="text-muted text-decoration-line-through">
                                                            €19,99
                                                        </span>
                                                    </p>
                                                    <a href="#" className="btn btn-primary">
                                                        Dettagli
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Controlli */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#cardCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#cardCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                    </div>
                </section>
                {/* Carosello */}
                <div className="BordoB d-flex justify-content-center">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide mb-5 carousel-custom"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={0}
                                className="active"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={1}
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={2}
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="img/giochi-di-ruolo-1024x512.webp"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="img/cover-gdt-858x400.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="img/232328442-close-up-of-children-s-hands-playing-a-captivating-board-game-with-ample-space-for-text-placement.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
