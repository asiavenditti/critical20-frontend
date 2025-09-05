import React from 'react'

export default function Footer() {
    return (
        <footer
            className="text-white pt-5 pb-3"
            style={{ backgroundColor: "#151726" }}
        >
            <div className="container">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-md-3">
                        <h5>il Team</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Asia Venditti
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Marzia Blasi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Cristian Buonocore
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Edoardo Lova
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Davide Criscuolo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Info utili</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Faq
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Il Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Contattaci
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Termini e condizioni
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Condizioni generali
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Seguici</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Link 7
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Link 8
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Link 9
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-light" />
                <p className="text-center mb-0">© 2025 - Critical20</p>
            </div>
        </footer>

    )
}
