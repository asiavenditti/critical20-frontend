import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function WishList({
  wishlist,
  setWishlist,
  setProductCart,
  productCart,
}) {
  const [aggiuntiAlCarrello, setAggiuntiAlCarrello] = useState(false);
  const [aggiuntoSingolo, setAggiuntoSingolo] = useState({}); // stato per singolo gioco

  const rimuoviDalCarrello = (indexToRemove) => {
    setWishlist(wishlist.filter((_, i) => i !== indexToRemove));
  };

  const handleAggiungiAlCarrello = () => {
    setProductCart([
      ...productCart,
      ...wishlist.map((p) => ({ ...p, quantity: 1 })),
    ]);
    setAggiuntiAlCarrello(true);
    setTimeout(() => {
      setAggiuntiAlCarrello(false);
    }, 3000);
    setWishlist([]);
  };

  const svuotaWishlist = () => setWishlist([]);

  const [aggiuntoPermanente, setAggiuntoPermanente] = useState({});
  const handleAggiungiSingolo = (p) => {
    setProductCart([...productCart, { ...p, quantity: 1 }]);
    setAggiuntoSingolo((prev) => ({ ...prev, [p.id]: true }));
    setAggiuntoPermanente((prev) => ({ ...prev, [p.id]: true }));

    setTimeout(() => {
      setAggiuntoSingolo((prev) => ({ ...prev, [p.id]: false }));
    }, 3000);
  };
  return (
    <div className="card bg-light shadow-sm">
      {aggiuntiAlCarrello && (
        <div className="alert alert-success" role="alert">
          Aggiunto tutto al carrello
        </div>
      )}
      <div className="card-header fw-bold">
        <i
          className="fi fi-ts-dice-d20 text-danger"
          style={{
            display: "inline-block",
            fontSize: "20px",
            verticalAlign: "middle",
          }}
        ></i>{" "}
        Wishlist
      </div>
      <div className="card-body overflow-auto" style={{ maxHeight: "680px" }}>
        {wishlist.length === 0 ? (
          <p>La wishlist è vuota</p>
        ) : (
          wishlist.map((p, index) => (
            <div
              className="d-flex justify-content-around align-items-center flex-wrap gap-3 p-3 mb-3 border-modal-cart"
              key={p.id}
            >
              {aggiuntoSingolo[p.id] && (
                <div
                  className="alert alert-success w-100 text-center"
                  role="alert"
                >
                  {p.name} aggiunto al carrello
                </div>
              )}
              <div className="d-flex justify-content-center align-items-center w-100">
                <div className="d-flex w-100">
                  <img
                    className="object-fit-contain me-3 rounded img-modal-cart"
                    src={p.file_paths[0]}
                    alt={p.name}
                  />
                  <div className="ms-3">
                    <strong>{p.name}</strong>
                    <div>€ {p.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end w-100">
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => rimuoviDalCarrello(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleAggiungiSingolo(p)}
                    disabled={aggiuntoPermanente[p.id]}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {wishlist.length > 0 && (
          <div className=" p-0 d-flex flex-column gap-2">
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <div>
                <button className="btn btn-danger" onClick={svuotaWishlist}>
                  Svuota la wishlist
                </button>
              </div>
              <div>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={handleAggiungiAlCarrello}
                >
                  Aggiungi tutto al carrello
                </button>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
