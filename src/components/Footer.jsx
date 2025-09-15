// Style
import { Link } from "react-router-dom";
import "../style/footerstyle.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {/*Il Team */}
          <div className="col-12 col-md-3 text-center">
            <div className="footer-section-title">Il Team</div>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/asiavenditti" className="footer-link">
                  Asia Venditti
                </a>
              </li>
              <li>
                <a href="https://github.com/marzia-blasi" className="footer-link">
                  Marzia Blasi
                </a>
              </li>
              <li>
                <a href="https://github.com//CristianBuonocore02" className="footer-link">
                  Cristian Buonocore
                </a>
              </li>
              <li>
                <a href="https://github.com/edoardolova" className="footer-link">
                  Edoardo Lova
                </a>
              </li>
              <li>
                <a href="https://github.com/DavideCriscuolo" className="footer-link">
                  Davide Criscuolo
                </a>
              </li>
            </ul>
          </div>

          {/* giochi in evidenza */}
          <div className="col-12 col-md-3 text-center">
            <div className="footer-section-title">giochi in evidenza</div>
            <ul className="list-unstyled">
              <li>
                <Link to="/products/ticket-to-ride-europe" className="footer-link">
                  Ticket to Ride: Europe
                </Link>
              </li>
              <li>
                <Link to="/products/carcassonne" className="footer-link">
                  Carcassonne
                </Link>
              </li>
              <li>
                <Link to="/products/7-wonders" className="footer-link">
                  7 Wonders
                </Link>
              </li>
              <li>
                <Link to="/products/patchwork" className="footer-link">
                  Patchwork
                </Link>
              </li>
              <li>
                <Link to="/products/pandemic-legacy-season-1" className="footer-link">
                  Pandemic Legacy: Season 1
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-12 col-md-3 text-center">
            <div className="footer-section-title">Seguici</div>
            <ul className="list-unstyled footer-social-list">
              <li>
                <a href="#" className="footer-social" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="footer-social" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="footer-social" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="footer-social" aria-label="Discord">
                  <i className="fab fa-discord"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="text-center">
          <p className="footer-copy pb-4">
            © 2025 - Critical20 - Il portale dei giochi da tavolo
          </p>
        </div>
      </div>
    </footer>
  );
}
