import React, { useState } from "react";
import '../style/Modalstyle.css'
export default function ModalCheckout({ isOpen, onClose, productCart, setProductCart }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [message, setMessage] = useState("");

    if (!isOpen) return null;

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
            discount_code: discountCode,
            items,
        };

        try {
            const res = await fetch("http://localhost:3030/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Errore durante l'invio dell'ordine");

            setMessage("Ordine inviato con successo!");
            setProductCart([]);
            onClose();
        } catch (error) {
            setMessage("Errore: " + error.message);
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Checkout</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome completo"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Codice sconto (opzionale)"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <div className="modal-buttons">
                        <button type="submit">Invia ordine</button>
                        <button type="button" onClick={onClose}>
                            Annulla
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
