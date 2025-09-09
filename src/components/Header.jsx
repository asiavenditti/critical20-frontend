import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

// Style
import "../style/Headerstyle.css";

export default function Header() {
  const closeMenu = () => {
    const collapse = document.getElementById("navbarEcommerce");
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bgN fixed-top shadow-sm text-white">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Spazio sinistra per bilanciare icone destra su desktop */}
        <div className="d-none d-lg-block" style={{ width: "100px" }}></div>

        {/* Toggle per mobile */}
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

        {/* Menu centrale */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarEcommerce"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" onClick={closeMenu}>
                Prodotti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/offerte" className="nav-link" onClick={closeMenu}>
                Offerte
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contatti" className="nav-link" onClick={closeMenu}>
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Icone a destra */}
        <div className="d-flex align-items-center gap-3 ms-auto">
          <NavLink
            to="#"
            className="icon-link text-light"
            aria-label="Preferiti"
          >
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </NavLink>
          <NavLink
            to="#"
            className="icon-link text-light me-1"
            aria-label="Carrello"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
