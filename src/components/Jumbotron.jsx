import React from 'react'

export default function Jumbotron() {
    return (
        <>
            <div className="sfondo">
                {/* Jumbotron / Hero Section */}
                <section
                    className=" text-white text-center Jumbo"
                    style={{
                        backgroundColor: "#151726",
                        border: "#151726 solid 3px",
                        opacity: "90%"
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <img
                                    src="./img/Ticket_to_Ride_Northern_Lights_box-1024x1024.webp"
                                    alt=""
                                    style={{ width: 550 }}
                                />
                                <img
                                    src="./img/Immagine_03-09-25_-_15.32-removebg-preview.png"
                                    alt=""
                                    style={{
                                        position: "relative",
                                        top: "-260px",
                                        left: 280,
                                        width: 400
                                    }}
                                />
                            </div>
                            <div className="col-4 align-items-left">
                                <h1>Nuovi Giochi in arrivo</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    neque quasi voluptatum reprehenderit possimus sequi voluptas
                                    blanditiis ab, nam, recusandae aliquid optio repudiandae aperiam
                                    animi quidem ipsa magnam quam totam. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Neque voluptas, pariatur, magnam
                                    consequuntur voluptatum illo voluptates in sapiente doloribus
                                    temporibus quia facilis, culpa beatae soluta minima eaque
                                    perferendis quis dicta.
                                </p>
                                <div>
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
                                </div>
                            </div>
                        </div>
                        <a href="#" className="btn btn-light btn-lg">
                            Scopri di più
                        </a>
                    </div>
                </section>
            </div>

        </>
    )
}
