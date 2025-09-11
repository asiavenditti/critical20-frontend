import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function CardCart({
  productCart = [],
  setProductCart = () => {},
}) {
  const rimuoviDalCarrello = (indexToRemove) => {
    setProductCart(productCart.filter((_, i) => i !== indexToRemove));
  };

  const svuotaCarrello = () => setProductCart([]);

  const totale = productCart
    .reduce((acc, p) => acc + parseFloat(p.price) * (p.quantity || 1), 0)
    .toFixed(2);

  const aggiornaQuantita = (index, delta) => {
    const aggiornato = [...productCart];
    aggiornato[index].quantity = Math.max(
      1,
      (aggiornato[index].quantity || 1) + delta
    );
    setProductCart(aggiornato);
  };

  return (
    <>
      <div className="card h-100 mb-4 bg-light shadow-sm">
        <div className="card-header fw-bold">🛒 Il tuo carrello</div>
        <div className="card-body">
          {productCart.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            productCart.map((p, index) => (
              <div
                className="d-flex justify-content-around align-items-center flex-wrap gap-3  p-3 mb-3"
                key={index}
              >
                <div className="d-flex justify-content-center align-items-center w-100 ">
                  <div className="d-flex w-100">
                    <div className="">
                      <img
                        className=" object-fit-contain  me-3 rounded"
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

        {productCart.length > 0 && (
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

      {/* Modale sempre montata, show controllato tramite prop */}
    </>
  );
}
