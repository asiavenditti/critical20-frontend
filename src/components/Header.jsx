
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cart from './Cart';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

// Style
import "../style/Headerstyle.css";


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bgN fixed-top shadow-sm text-white">
                <div className="container-fluid d-flex align-items-center justify-content-between">

                    <div className="d-none d-lg-block" style={{ width: '100px' }}></div>

                    <button
                        className="navbar-toggler border-0 d-lg-none me-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarEcommerce"
                        aria-controls="navbarEcommerce"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} color="white" />
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarEcommerce">
                        <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link" onClick={closeMenu}>Prodotti</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/offerte" className="nav-link" onClick={closeMenu}>Offerte</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contatti" className="nav-link" onClick={closeMenu}>Contatti</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center gap-3 ms-auto">
                        <NavLink to="#" className="icon-link text-light" aria-label="Preferiti">
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </NavLink>

                        {/* Pulsante Offcanvas */}
                        <button
                            className="brt"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasCart"
                            aria-controls="offcanvasCart"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Offcanvas del Carrello */}
            <div
                className="offcanvas offcanvas-end" style={{ width: '700px' }}
                tabIndex={-1}
                id="offcanvasCart"
                aria-labelledby="offcanvasCartLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasCartLabel">Il tuo Carrello</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <Cart />
                </div>
            </div>
        </>
    );
}
