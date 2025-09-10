import React, { useState, useEffect } from "react";

export default function ModalCheckout({ show, handleClose, productCart, setProductCart }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [message, setMessage] = useState("");

    const totale = productCart
        .reduce((acc, prodotto) => acc + parseFloat(prodotto.price) * (prodotto.quantity || 1), 0)
        .toFixed(2);

    // Resetta form quando la modale viene chiusa
    useEffect(() => {
        if (!show) {
            setUserName("");
            setUserEmail("");
            setDiscountCode("");
            setMessage("");
        }
    }, [show]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const items = productCart.map((product) => ({
            id_order: product.id,
            quantity: product.quantity || 1,
        }));

        const payload = {
            order_date: new Date().toISOString().split("T")[0],
            status: "paid",
            user_name: userName,
            user_email: userEmail,
            discount_code: discountCode || null,
            items,
        };

        try {
            const res = await fetch("http://localhost:3030/api/invoices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Errore durante l'invio dell'ordine");

            setMessage("✅ Ordine inviato con successo!");
            setProductCart([]);
            setTimeout(() => handleClose(), 1500);
        } catch (error) {
            setMessage("❌ " + error.message);
        }
    };

    return (
        <div
            className={`modal modal-custom ${show ? "show d-block" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: show ? "rgba(0,0,0,0.2)" : "transparent" }}
        >
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div
                    className="modal-content"
                    style={{ boxShadow: "none" }}
                >
                    <div className="modal-header">
                        <h5 className="modal-title">Checkout</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {/* Riepilogo carrello */}
                        <div className="mb-3">
                            {productCart.map((p) => (
                                <div key={p.id} className="d-flex justify-content-between">
                                    <span>{p.name} x {p.quantity || 1}</span>
                                    <span>€ {(p.price * (p.quantity || 1)).toFixed(2)}</span>
                                </div>
                            ))}
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Totale:</strong>
                                <strong>€ {totale}</strong>
                            </div>
                        </div>

                        {message && <p className="text-center fw-bold">{message}</p>}

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome completo"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Codice sconto (opzionale)"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-success">Conferma e Paga</button>
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Annulla</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
