import { useOutletContext } from "react-router-dom";
export default function BtnWishlist({ game }) {
  const { wishlist, setWishlist, triggerAlert } = useOutletContext();
  const toggleWishlist = () => {
    const isInWishlist = wishlist.some((p) => p.id === game.id);

    if (isInWishlist) {
      setWishlist(wishlist.filter((p) => p.id !== game.id));
    } else {
      setWishlist([...wishlist, game]);
    }
  };
  const isFavorite = wishlist.some((p) => p.id === game.id);

  return (
    <button
      data-bs-toggle="tooltip"
      type="button"
      className="btn border-0 "
      onClick={() => {
        toggleWishlist();
        triggerAlert(
          isFavorite
            ? `${game.name} Rimosso dai preferiti`
            : ` ${game.name} Aggiunto ai preferiti`,
          isFavorite ? "danger" : "success"
        );
      }}
      title={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      <i
        className={
          isFavorite
            ? "fi fi-ts-dice-d20 text-danger  "
            : "fi fi-ts-dice-d20 text-black "
        }
        style={{
          display: "inline-block",
          fontSize: "30px",
          animation: isFavorite ? "spin 0.5s ease-in-out" : "",
        }}
      ></i>
    </button>
  );
}
