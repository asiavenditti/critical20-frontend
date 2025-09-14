import { Link } from "react-router";
//import { useOutletContext } from "react-router-dom";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import BtnWishlist from "./BtnWishlist";
export default function PLCardLIst({ game }) {
  return (
    <div className="card mb-4">
      <div className="cardlist  card-body text-dark">
        <div className="py-2">
          <div className="me-5 ">
            <h3>{game.name}</h3>
            <p className="">{game.description}</p>
          </div>
          <div className="d-flex list-group-flush  ">
            <div className="list-group-item">
              <span className="badge bg-black me-2">
                Durata: {game.duration}'
              </span>
            </div>
            <div className="list-group-item ml-2">
              <span className="badge bg-black me-2">Età: {game.age}+</span>
            </div>
            <div className="list-group-item ml-2">
              <span className="badge bg-black me-2">
                Giocatori: {game.players}
              </span>
            </div>
            <div className="list-group-item ml-2">
              <span className="badge bg-success text-white me-2">
                {game.difficulty}
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center  ">
          <div>
            <Link to={`/products/${game.slug}`} className="btn btn-primary">
              Vai al gioco
              <FontAwesomeIcon icon={faDice} />
            </Link>
          </div>
          <div className="p-2">
            {" "}
            <BtnWishlist game={game} />
          </div>
        </div>
      </div>
    </div>
  );
}
