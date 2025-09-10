import { Link } from "react-router";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function PLCardLIst({ game }) {
  return (
    <div className="card mb-4">
      <div
        key={game.id}
        className="cardlist card-body text-light d-flex align-items-center justify-content-between"
      >
        <img
          className="cardlist-img-mini"
          src={game.file_paths[0]}
          alt={game.name}
        />
        <div>
          <h6>{game.name}</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">difficoltà</li>
            <li className="list-group-item">età</li>
            <li className="list-group-item">numero giocatori</li>
          </ul>
        </div>
        <Link to={`/products/${game.slug}`} className="btn btn-primary">
          <FontAwesomeIcon icon={faDice} />
        </Link>
      </div>
    </div>
  );
}
/*css appunti
 cardlist-img-mini mi serve per dare all'immagine una dimensione piccolina 
 
 
 */
