import React from 'react';

export default function Jumbotron() {
    return (
        <div id="jumbotronCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                {/* SLIDE 1 */}
                <div className="carousel-item active">
                    <section
                        className="text-white text-center d-flex align-items-center"
                        style={{
                            backgroundColor: "#151726",
                            border: "#151726 solid 3px",
                            height: "100vh", // Altezza fissa per evitare salti
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div className="container py-5">
                            <div className="row align-items-center justify-content-center">
                                {/* IMMAGINE PRINCIPALE */}
                                <div className="col-12 col-md-5 position-relative mb-4 mb-md-0 text-center">
                                    <img
                                        src="./img/Ticket_to_Ride_Northern_Lights_box-1024x1024.webp"
                                        alt="Ticket to Ride"
                                        className="img-fluid rounded"
                                        style={{
                                            maxWidth: "400px",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>

                                {/* TESTO */}
                                <div className="col-12 col-md-5 text-start">
                                    <h1>Nuovi Giochi in arrivo</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Laborum, neque quasi voluptatum <br /> reprehenderit possimus sequi
                                        voluptas blanditiis ab, nam, recusandae aliquid optio <br />repudiandae
                                        aperiam animi quidem ipsa magnam quam totam.
                                    </p>
                                    <button
                                        style={{
                                            backgroundColor: "#fadb7f",
                                            border: "solid 1px",
                                            borderRadius: "20%",
                                            padding: "0.5rem 1rem"
                                        }}
                                        className="mt-3"
                                    >
                                        Scarica il regolamento
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* SLIDE 2 */}
                <div className="carousel-item">
                    <section
                        className="text-white text-center d-flex align-items-center"
                        style={{
                            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('./img/sfondo2.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh", // Stessa altezza della slide 1
                            border: "#151726 solid 3px"
                        }}
                    >
                        <div className="container py-5">
                            <div className="row justify-content-center">
                                <div className="col-10 col-md-8">
                                    <h1>Espansione disponibile</h1>
                                    <p className="lead mt-3">
                                        Scopri la nuova espansione che porta ancora più divertimento e
                                        nuove sfide. Gioca con gli amici e vivi nuove avventure.
                                    </p>
                                    <button
                                        style={{
                                            backgroundColor: "#fadb7f",
                                            border: "solid 1px",
                                            borderRadius: "20%",
                                            padding: "0.5rem 1rem"
                                        }}
                                        className="mt-4"
                                    >
                                        Scopri di più
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* CONTROLLI */}
            <button className="carousel-control-prev" type="button" data-bs-target="#jumbotronCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Precedente</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#jumbotronCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Successivo</span>
            </button>

            {/* INDICATORI */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#jumbotronCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#jumbotronCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
        </div>
    );
}
