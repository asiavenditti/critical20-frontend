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
  const rimuoviDalCarrello = (indexToRemove) => {
    setWishlist(wishlist.filter((_, i) => i !== indexToRemove));
  };

  function hadleAggiungiAlCarrello() {
    //setProductCart([...productCart, ...wishlist]); aggiungi la quantitra a 1
    setProductCart([
      ...productCart,
      ...wishlist.map((p) => ({ ...p, quantity: 1 })),
    ]);
    setAggiuntiAlCarrello(true);
    setTimeout(() => {
      setAggiuntiAlCarrello(false);
    }, 3000);
    setWishlist([]);
  }

  const svuotaWishlist = () => setWishlist([]);

  return (
    <>
      <div className="card bg-light shadow-sm">
        {aggiuntiAlCarrello && (
          <div className="alert alert-success" role="alert">
            Aggiunto tutto al carrello
          </div>
        )}
        <div className="card-header fw-bold">🛒 Wishlits</div>
        <div className="card-body overflow-auto" style={{ maxHeight: "680px" }}>
          {wishlist.length === 0 ? (
            <p>La wishlist é vuota</p>
          ) : (
            wishlist.map((p, index) => (
              <div
                className="d-flex justify-content-around align-items-center flex-wrap gap-3  p-3 mb-3 border-modal-cart"
                key={index}
              >
                <div className="d-flex justify-content-center align-items-center w-100 ">
                  <div className="d-flex w-100">
                    <div className="">
                      <img
                        className=" object-fit-contain  me-3 rounded img-modal-cart"
                        src={p.file_paths[0]}
                        alt={p.name}
                      />
                    </div>

                    <div className="ms-3">
                      <span>
                        <strong>{p.name} </strong>{" "}
                      </span>
                      <div>
                        {" "}
                        <span>€ {p.price.toFixed(2)} </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" d-flex justify-content-end w-100 ">
                  <div className="d-flex  gap-2">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => rimuoviDalCarrello(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <div>
                      <button
                        className="btn btn-sm btn-primary"
                        //setProductCart([...productCart, p]) con quantita 1
                        onClick={() =>
                          setProductCart([
                            ...productCart,
                            { ...p, quantity: 1 },
                          ])
                        }
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="card-footer d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              <button className="btn btn-danger" onClick={svuotaWishlist}>
                Svuota la wishlist
              </button>

              <button
                className="btn btn-primary"
                onClick={hadleAggiungiAlCarrello}
              >
                Aggiungi tutto al carello
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
