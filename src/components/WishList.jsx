export default function WishList({ wishlist, setWishlist }) {
  return (
    <>
      <div className="card bg-light shadow-sm">
        <div className="card-header fw-bold">🛒 Wishlits</div>
        <div className="card-body overflow-auto" style={{ maxHeight: "680px" }}>
          {wishlist.length === 0 ? (
            <p>Il carrello è vuoto</p>
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
                      <p className="m-0">
                        {" "}
                        Quantita selezionta:{" "}
                        {p.quantity > 1
                          ? `${p.quantity} pezzi`
                          : `${p.quantity} pezzo`}{" "}
                      </p>
                      <div>
                        {" "}
                        <span>€ {p.price.toFixed(2)} </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" d-flex justify-content-end w-100 ">
                  <div className="d-flex ">
                    {p.quantity > 1 && (
                      <button
                        className="btn btn-sm btn-outline-secondary me-1"
                        onClick={() => aggiornaQuantita(index, -1)}
                      >
                        -
                      </button>
                    )}
                    <button
                      className="btn btn-sm btn-outline-secondary me-1"
                      onClick={() => aggiornaQuantita(index, 1)}
                    >
                      +
                    </button>
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
              <strong>Totale:</strong> € {totale}
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-danger" onClick={svuotaCarrello}>
                Svuota carrello
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
