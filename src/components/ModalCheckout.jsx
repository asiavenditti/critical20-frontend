import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ModalCheckout({ show, handleClose, productCart, setProductCart }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [discountCode, setDiscountCode] = useState("");

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCvv, setCardCvv] = useState("");

    const [message, setMessage] = useState("");

    const totale = productCart
        .reduce((acc, prodotto) => acc + parseFloat(prodotto.price) * (prodotto.quantity || 1), 0)
        .toFixed(2);

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
            shipping_address: {
                address,
                city,
                zip,
                country,
            },
            payment: {
                card_name: cardName,
                card_number: cardNumber,
                card_expiry: cardExpiry,
                card_cvv: cardCvv,
            },
            items,
        };

        try {
            const res = await fetch("http://localhost:3030/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Errore durante l'invio dell'ordine");

            setMessage("✅ Ordine inviato con successo!");
            setProductCart([]);
            setTimeout(() => {
                handleClose();
                setMessage("");
            }, 2000);
        } catch (error) {
            setMessage("❌ " + error.message);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Riepilogo Carrello */}
                <div className="mb-3">
                    {productCart.map((p, i) => (
                        <div key={i} className="d-flex justify-content-between">
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

                <Form onSubmit={handleSubmit}>
                    {/* DATI UTENTE */}
                    <h5 className="mb-2">Dati cliente</h5>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nome completo"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control
                            type="text"
                            placeholder="Codice sconto (opzionale)"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                    </Form.Group>

                    {/* INDIRIZZO */}
                    <h5 className="mb-2">Indirizzo di spedizione</h5>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Via e numero civico"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Città"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex gap-2 mb-3">
                        <Form.Control
                            type="text"
                            placeholder="CAP"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                        />
                        <Form.Control
                            type="text"
                            placeholder="Paese"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </div>

                    {/* PAGAMENTO */}
                    <h5 className="mb-2">Pagamento</h5>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nome sulla carta"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Numero carta (16 cifre)"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex gap-2 mb-4">
                        <Form.Control
                            type="text"
                            placeholder="MM/AA"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            required
                        />
                        <Form.Control
                            type="text"
                            placeholder="CVV"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-between">
                        <Button variant="success" type="submit">
                            Conferma e Paga
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Annulla
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
