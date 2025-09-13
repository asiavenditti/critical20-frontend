import React from "react";
// import "animate.css";

export default function Jumbotron() {
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center text-white rounded-3 shadow-xl"
      style={{
        width: "100%",
        minHeight: "85vh",
        background: "linear-gradient(to right, #151726, #1c1f2a, #000000)",
        overflow: "hidden",
        padding: "8rem 2rem 4rem 2rem",
      }}
    >
      {/* Overlay sfumato */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(0,0,0,0.6), transparent 50%)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="container d-flex flex-column flex-md-row align-items-center justify-content-center position-relative gap-4"
        style={{ zIndex: 2 }}
      >
        {/* Immagine principale */}
        <div className="w-100 w-md-50 mb-4 mb-md-0 animate__animated animate__fadeInLeft">
          <img
            src="/img/immagineJumbo.png"
            alt="Immagine promozionale"
            className="img-fluid rounded-5 shadow-xl w-100"
            style={{
              maxWidth: "100%",
              height: "auto",
              transition: "transform 0.5s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Testo */}
        <div className="w-100 w-md-50 text-center text-md-start animate__animated animate__fadeInRight position-relative">
          <h1 className="display-4 display-md-3 fw-bold mb-3">
            Nuovi Giochi in Arrivo 🎲
          </h1>
          <p className="lead mb-4">
            Scopri le ultime novità e arricchisci la tua collezione. Avventure,
            espansioni e divertimento per ogni serata in compagnia!
          </p>

          {/* Pulsante con frecce invertite alla destra */}
          <div className="d-flex align-items-center gap-4 mb-5 position-relative">
            <a
              href="/products"
              className="btn btn-warning btn-lg rounded-pill"
              style={{ transition: "transform 0.3s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Vai ai Prodotti
            </a>

            {/* Frecce animate invertite */}
            <div className="d-flex gap-1">
              <div className="arrow-left bounce"></div>
              <div
                className="arrow-left bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="arrow-left bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Quadrato etichetta promozioni */}
          <div
            className="bg-warning text-dark fw-bold text-center py-2 px-3 mb-3 rounded animate__animated animate__fadeInUp"
            style={{ display: "inline-block", fontSize: "1rem" }}
          >
            Ogni settimana nuove promozioni!
          </div>
        </div>
      </div>

      {/* Striscia inferiore */}
      <div
        className="position-absolute bottom-0 start-0 w-100 text-center text-white-50 p-2"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
        }}
      >
        *Promozioni aggiornate ogni settimana.
      </div>

      {/* CSS per le frecce animate */}
      <style jsx>{`
        .arrow-left {
          width: 20px;
          height: 20px;
          border-top: 3px solid white;
          border-left: 3px solid white;
          transform: rotate(-45deg);
          margin: 0 auto;
        }

        .bounce {
          animation: bounceArrow 1s infinite;
        }

        @keyframes bounceArrow {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateX(0) rotate(-45deg);
          }
          40% {
            transform: translateX(-8px) rotate(-45deg);
          }
          60% {
            transform: translateX(-4px) rotate(-45deg);
          }
        }
      `}</style>
    </section>
  );
}
