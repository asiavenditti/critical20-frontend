import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            {/* navbar */}
            <>
                <nav className="navbar navbar-expand-lg navbar-light bgN shadow-sm small-navbar fixed-top">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler border-0 bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarEcommerce"
                            aria-controls="navbarEcommerce"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                        </button>


                        <div className="collapse navbar-collapse text-light" id="navbarEcommerce">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-light">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/products">
                                        Prodotti
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="#">
                                        Offerte
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="#">
                                        Contatti
                                    </Link>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center gap-3">
                                <Link to="#" className="btn btn-outline-light btn-sm">
                                    Login
                                </Link>
                                <Link to="#" className="btn btn-light btn-sm">
                                    Carrello (0)
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

            </>


        </>

    )
}
