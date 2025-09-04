import React from 'react'

export default function Header() {
    return (
        <>
            <>
                <nav className="navbar navbar-expand-lg navbar-light bgN shadow-sm small-navbar fixed-top">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler text-black"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarEcommerce"
                            aria-controls="navbarEcommerce"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon text-light" />
                        </button>
                        <div className="collapse navbar-collapse text-light" id="navbarEcommerce">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-light">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">
                                        Prodotti
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">
                                        Offerte
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">
                                        Contatti
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center gap-3">
                                <a href="#" className="btn btn-outline-light btn-sm">
                                    Login
                                </a>
                                <a href="#" className="btn btn-light btn-sm">
                                    Carrello (0)
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

            </>


        </>

    )
}
