import { Link } from "react-router-dom";

export default function PLCardGrid({ game }) {
  return (
    <div key={game.id} className="col-12 col-md-6 col-lg-4">
      <div className="card bg-light products-card h-100">
        <img
          src={game.file_paths[0]}
          alt={game.name}
          className="mx-auto d-block mt-3"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
        {/* Corpo della card con testo centrato */}
        <div className="card-body text-center">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text">{game.description}</p>
          <p className="card-text">
            {game.price !== game.original_price ? (
              <>
                <span className="text-muted text-decoration-line-through me-2">
                  €{game.original_price}
                </span>
                <span className="fw-bold text-success">€{game.price}</span>
              </>
            ) : (
              <span className="fw-bold">€{game.price}</span>
            )}
          </p>

          {/* Link al dettaglio o azione */}
          <Link to={`/products/${game.slug}`} className="btn btn-primary">
            Vai al gioco
          </Link>
        </div>
      </div>
    </div>
  );
}
