import React from 'react'
import { Link } from 'react-router'

export default function Jumbotron() {
    return (
        <>
            <div id="jumbotronCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {/* SLIDE 1 */}
                    <div className="carousel-item active">
                        <section
                            className="text-white text-center Jumbo"
                            style={{
                                backgroundColor: "#151726",
                                border: "#151726 solid 3px",
                                opacity: "90%"
                            }}
                        >
                            <div className="container">
                                <div className="row align-items-center justify-content-center py-5">
                                    <div className="col-12 col-md-5 position-relative mb-4 mb-md-0">
                                        <img style={{ width: "400px" }}
                                            src="./img/Ticket_to_Ride_Northern_Lights_box-1024x1024.webp"
                                            alt="Ticket to Ride"
                                            className="img-fluid rounded shadow-lg"
                                        />
                                        <img
                                            src="./img/Immagine_03-09-25_-_15.32-removebg-preview.png"
                                            alt="Overlay"
                                            style={{
                                                position: "absolute",
                                                top: "55%",
                                                left: "40%",
                                                width: "50%"
                                            }}
                                        />
                                    </div>
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
                                                borderRadius: "20%"
                                            }}
                                            className="mt-3"
                                        >
                                            Scarica il regolamento
                                        </button>
                                        {/* <div className="mt-4">
                                            <Link to="/products" className="btn btn-light btn-lg">
                                                Scopri di più
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="carousel-item">
                        <section
                            className="text-white text-center Jumbo d-flex align-items-center"
                            style={{
                                backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('./img/sfondo2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                minHeight: "80vh",
                                border: "#151726 solid 3px"
                            }}
                        >
                            <div className="container">
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
                                                borderRadius: "20%"
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
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#jumbotronCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                {/* INDICATORI */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#jumbotronCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#jumbotronCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
            </div>
        </>
    )
}
