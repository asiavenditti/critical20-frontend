import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function WishList({ wishlist, setWishlist }) {
  const rimuoviDalCarrello = (indexToRemove) => {
    setWishlist(wishlist.filter((_, i) => i !== indexToRemove));
  };

  const svuotaWishlist = () => setWishlist([]);

  return (
    <>
      <div className="card bg-light shadow-sm">
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
                  <div className="d-flex ">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => rimuoviDalCarrello(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}
