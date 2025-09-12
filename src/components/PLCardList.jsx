import { Link } from "react-router";
import { useOutletContext } from "react-router-dom";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function PLCardLIst({ game }) {
  const { wishlist, setWishlist, triggerAlert } = useOutletContext();
  const toggleWishlist = () => {
    const isInWishlist = wishlist.some((p) => p.id === game.id);

    if (isInWishlist) {
      setWishlist(wishlist.filter((p) => p.id !== game.id));
    } else {
      setWishlist([...wishlist, game]);
    }
  };

  // Verifico se il prodotto è nei preferiti per cambiare l’icona
  const isFavorite = wishlist.some((p) => p.id === game.id);
  return (
    <div className="card mb-4">
      <div
        key={game.id}
        className="cardlist  card-body text-dark d-flex align-items-center justify-content-between flex-wrap"
      >
        <div className=" ">
          <h6>{game.name}</h6>
          <p>{game.description}</p>
        </div>
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

        <div>
          <Link to={`/products/${game.slug}`} className="btn btn-primary">
            Vai al gioco
            <FontAwesomeIcon icon={faDice} />
          </Link>
          <button
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            type="button"
            className="btn text-danger border-0"
            onClick={() => {
              toggleWishlist();
              triggerAlert(
                isFavorite
                  ? `${game.name} Rimosso dai preferiti`
                  : ` ${game.name} Aggiunto ai preferiti`,
                isFavorite ? "danger" : "success"
              );
            }}
            title={
              isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
            }
          >
            <i
              className={
                isFavorite
                  ? "fi fi-ts-dice-d20 text-danger"
                  : "fi fi-ts-dice-d20 text-black"
              }
              style={{
                display: "inline-block",
                fontSize: "30px",
                animation: isFavorite ? "spin 0.5s ease-in-out" : "",
              }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
