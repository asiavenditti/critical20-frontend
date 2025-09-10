import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCheckout from "./ModalCheckout";

export default function CardCart({ productCart = [], setProductCart = () => { } }) {
    const [showModal, setShowModal] = useState(false);

    const rimuoviDalCarrello = (indexToRemove) => {
        setProductCart(productCart.filter((_, i) => i !== indexToRemove));
    };

    const svuotaCarrello = () => setProductCart([]);

    const totale = productCart
        .reduce((acc, p) => acc + parseFloat(p.price) * (p.quantity || 1), 0)
        .toFixed(2);

    const aggiornaQuantita = (index, delta) => {
        const aggiornato = [...productCart];
        aggiornato[index].quantity = Math.max(1, (aggiornato[index].quantity || 1) + delta);
        setProductCart(aggiornato);
    };

    return (
        <>
            <div className="card mb-4 bg-light shadow-sm">
                <div className="card-header fw-bold">🛒 Il tuo carrello</div>
                <div className="card-body">
                    {productCart.length === 0 ? (
                        <p>Il carrello è vuoto</p>
                    ) : (
                        productCart.map((p, index) => (
                            <div className="d-flex justify-content-between align-items-center mb-3" key={index}>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="w-25 me-3 rounded"
                                        src={p.file_paths[0]}
                                        alt={p.name}
                                    />
                                    <div>
                                        <span className="badge bg-secondary">
                                            {p.quantity || 1} pezzo/i
                                        </span>
                                        <div>{p.name}</div>
                                        <div>€ {(p.price * (p.quantity || 1)).toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-sm btn-outline-secondary me-1" onClick={() => aggiornaQuantita(index, -1)}>-</button>
                                    <button className="btn btn-sm btn-outline-secondary me-1" onClick={() => aggiornaQuantita(index, 1)}>+</button>
                                    <button className="btn btn-sm btn-warning" onClick={() => rimuoviDalCarrello(index)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
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
                            <button className="btn btn-warning" onClick={svuotaCarrello}>
                                Svuota carrello
                            </button>
                            <button className="btn btn-success" onClick={() => setShowModal(true)}>
                                Vai al pagamento
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modale sempre montata, show controllato tramite prop */}
            <ModalCheckout
                show={showModal}
                handleClose={() => setShowModal(false)}
                productCart={productCart}
                setProductCart={setProductCart}
            />
        </>
    );
}
