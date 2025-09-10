import { Link } from "react-router";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function PLCardLIst({ game }) {
  return (
    <div className="card mb-4">
      <div
        key={game.id}
        className="cardlist card-body text-dark d-flex align-items-center justify-content-between"
      >
        <img
          className="cardlist-img-mini"
          src={game.file_paths[0]}
          alt={game.name}
        />
        <div>
          <h6>{game.name}</h6>
          <div className="d-flex list-group-flush">
            <div className="list-group-item">
              <span className="badge bg-secondary me-2">
                Durata: {game.duration}'
              </span>
            </div>
            <div className="list-group-item ml-2">
              <span className="badge bg-secondary me-2">Età: {game.age}+</span>
            </div>
            <div className="list-group-item ml-2">
              <span className="badge bg-secondary me-2">
                Giocatori: {game.players}
              </span>
            </div>
            <div className="list-group-item ml-2">
              <span className="badge bg-success text-dark me-2">
                {game.difficulty}
              </span>
            </div>
          </div>
        </div>

        <Link to={`/products/${game.slug}`} className="btn btn-primary">
          Vai al gioco
          <FontAwesomeIcon icon={faDice} />
        </Link>
      </div>
    </div>
  );
}
