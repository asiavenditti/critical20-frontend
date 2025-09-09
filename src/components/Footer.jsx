// Style
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
                <a href="#" className="footer-link">
                  Asia Venditti
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Marzia Blasi
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cristian Buonocore
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Edoardo Lova
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Davide Criscuolo
                </a>
              </li>
            </ul>
          </div>

          {/*Info utili */}
          <div className="col-12 col-md-3 text-center">
            <div className="footer-section-title">Info utili</div>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Il Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contattaci
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Termini e condizioni
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Condizioni generali
                </a>
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
          <p className="footer-copy">
            © 2025 - Critical20 - Il portale dei giochi da tavolo
          </p>
        </div>
      </div>
    </footer>
  );
}
