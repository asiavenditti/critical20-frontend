import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bgN fixed-top shadow-sm">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                {/* Spazio vuoto a sinistra solo su desktop per bilanciare il toggle */}
                <div className="d-none d-lg-block" style={{ width: '100px' }}></div>

                {/* Toggle: visibile solo su sm/md a sinistra */}
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

                {/* Menu collapsable centrato */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarEcommerce">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <Link className="nav-link nav-custom-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-custom-link" to="/products">Prodotti</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-custom-link" to="#">Offerte</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-custom-link" to="#">Contatti</Link>
                        </li>
                    </ul>
                </div>

                {/* Icone sempre a destra */}
                <div className="d-flex align-items-center gap-3 ms-auto">
                    <Link to="#" className="icon-link icon-hover-gold" aria-label="Preferiti">
                        <FontAwesomeIcon icon={faHeart} size="lg" />
                    </Link>
                    <Link to="#" className="icon-link icon-hover-gold me-1" aria-label="Carrello">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
