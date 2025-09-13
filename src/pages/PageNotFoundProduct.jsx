import { Link } from "react-router-dom";
import LogoMini from "../components/LogoMini";
import "../style/ErrorStyle.css";

export default function PageNotFoundProduct() {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-start align-items-center bg-dark text-light px-3"
      style={{
        background: "linear-gradient(to bottom, #1a1a1a, #000000)",
        textAlign: "center",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          filter: "drop-shadow(0 0 10px #e8d6ba)",
          marginBottom: "20px",
        }}
      >
        <LogoMini />
      </div>

      <img
        src="/imgProduct/babyYoda.png"
        alt="baby-yoda"
        className="img-fluid mb-4"
        style={{ maxWidth: "200px", height: "auto" }}
      />

      <h1 className="display-4 fw-bold mb-2">Prodotto non trovato</h1>
      <h2 className="mb-3 fs-3">Sembra che questo prodotto sia scomparso...</h2>
      <p className="mb-4 fs-5 px-2" style={{ maxWidth: "600px" }}>
        Il prodotto che stai cercando non è disponibile. Forse è stato rimosso o
        non è mai esistito!
      </p>

      <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
        <button onClick={() => window.history.back()} className="fancy-btn">
          🔙 Indietro
        </button>
        <Link to="/" className="fancy-btn">
          🏠 Torna alla Home
        </Link>
        <Link to="/products" className="fancy-btn">
          🧺 Vai ai Prodotti
        </Link>
      </div>
    </div>
  );
}
