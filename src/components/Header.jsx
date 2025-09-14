import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Cart from "./Cart";
import WishList from "./WishList";

// Style
import "../style/Headerstyle.css";
import "../style/Modalstyle.css";

export default function Header({
  productCart,
  setProductCart,
  wishlist,
  setWishlist,
}) {
  const closeMenu = () => {
    const collapse = document.getElementById("navbarEcommerce");
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  // Calcola la quantità totale degli articoli nel carrello
  const getTotalQuantity = (cart) => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bgN fixed-top shadow-sm text-white ">
          <div className="container-fluid d-flex align-items-center justify-content-between px-3">
            <div className="d-none d-lg-block" style={{ width: "100px" }}></div>

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
                  <NavLink
                    to="/products"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Prodotti
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/offerte"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Offerte
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contatti"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Contatti
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center gap-3 ms-auto">
              <div>
                {/* Bottone Offcanvas wishlist*/}
                <button
                  className="btn btn-link text-light position-relative"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWishlist"
                  aria-controls="offcanvasWishlist"
                >
                  <i
                    className="fi fi-ts-dice-d20 text-white "
                    style={{
                      display: "inline-block",
                      fontSize: "20px",
                      verticalAlign: "middle",
                    }}
                  ></i>{" "}
                  {getTotalQuantity(wishlist) > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {getTotalQuantity(wishlist)}
                    </span>
                  )}{" "}
                  {/* Badge quantità */}
                </button>
              </div>

              {/* Bottone Offcanvas  Carrello*/}
              <button
                className="brt btn btn-link text-light position-relative"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCart"
                aria-controls="offcanvasCart"
              >
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {/* Badge quantità */}
                {getTotalQuantity(productCart) > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ top: "6px" }}
                  >
                    {getTotalQuantity(productCart)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Offcanvas della WishList */}
        <div
          className="offcanvas offcanvas-end"
          style={{ width: "700px" }}
          tabIndex={-1}
          id="offcanvasWishlist"
          aria-labelledby="offcanvasWishlistLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWishlistLabel">
              La tua WishList
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <WishList
              wishlist={wishlist}
              setWishlist={setWishlist}
              productCart={productCart}
              setProductCart={setProductCart}
            />
          </div>
        </div>

        {/* Offcanvas del Carrello */}
        <div
          className="offcanvas offcanvas-end"
          style={{ width: "700px" }}
          tabIndex={-1}
          id="offcanvasCart"
          aria-labelledby="offcanvasCartLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasCartLabel">
              Il tuo Carrello
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <Cart productCart={productCart} setProductCart={setProductCart} />
          </div>
        </div>
      </header>
    </>
  );
}
