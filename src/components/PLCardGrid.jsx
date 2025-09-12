import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export default function PLCardGrid({ game }) {
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
    <div key={game.id} className="col-12 col-md-6 col-lg-4">
      <div className="card bg-light products-card h-100">
        <div className="card-img p-4 ">
          <div className="d-flex justify-content-center">
            <img
              src={game.file_paths[0]}
              alt={game.name}
              className=" card-img-top"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Corpo della card con testo centrato */}
        <div className="card-body  d-flex flex-column justify-content-end">
          <h5 className="card-title ">{game.name}</h5>
          <p className="card-text mb-1">{game.description}</p>
          <p className="card-text m-0">
            {Number(game.price) !== Number(game.original_price) ? (
              <>
                <span className="text-muted text-decoration-line-through me-2">
                  €{Number(game.original_price).toFixed(2)}
                </span>
                <span className="fw-bold text-success">
                  €{Number(game.price).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="fw-bold">€{Number(game.price).toFixed(2)}</span>
            )}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Link to={`/products/${game.slug}`} className="btn btn-primary">
                Vai al gioco
              </Link>
            </div>

            <div>
              <button
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
          {/* Link al dettaglio o azione */}
        </div>
      </div>
    </div>
  );
}
