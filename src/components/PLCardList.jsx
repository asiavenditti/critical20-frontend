import { Link } from "react-router";

export default function PLCardLIst({ game }) {
  return (
    <div
      key={game.id}
      className="cardlist text-light d-flex align-items-center justify-content-between"
    >
      <img
        className="cardlist-img-mini"
        src={game.file_paths[0]}
        alt={game.name}
      />
      <h6>{game.name}</h6>

      <ul>
        <li>difficoltà</li>
        <li>età</li>
        <li>numero giocatori</li>
      </ul>
      <Link to={`/products/${game.slug}`} className="btn btn-primary">
        freccia sost
      </Link>
    </div>
  );
}
/*css appunti
 cardlist-img-mini mi serve per dare all'immagine una dimensione piccolina 
 
 
 */
