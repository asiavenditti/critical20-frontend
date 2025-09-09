import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function EmailModal() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [sendEmail, setSendEmail] = useState(false);



    // Mostra la modale alla prima apertura del sito
    useEffect(() => {
        // const hasVisited + local storage 
        const hasVisited = localStorage.getItem('hasVisited')

        // se l'utente non ha mai visitato, mostro la modale
        if (!hasVisited) {
            setShow(true)
            // registriamo la vista dell'utente con "true"
            localStorage.setItem('hasVisited', 'true')
        }

    }, []);

    // Quando sendEmail diventa true parte la chiamata API
    useEffect(() => {
        if (sendEmail && email) {
            const sendWelcomeEmail = async () => {
                try {
                    const response = await fetch("http://localhost:3030/api/sendEmail", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email }),
                    });

                    if (!response.ok) throw new Error("Errore API");

                    const data = await response.json(); // se il server restituisce JSON
                    console.log("Risposta dal server:", data);

                    alert(`Grazie ${email}, ti abbiamo inviato una mail di benvenuto!`);
                    setShow(false); // chiudo la modale
                } catch (error) {
                    alert("Si è verificato un errore durante l'invio.");
                    console.error(error);
                } finally {
                    setSendEmail(false); // resetto il trigger
                }
            };

            sendWelcomeEmail();
        }
    }, [sendEmail, email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Inserisci un'email valida!");
            return;
        }
        setSendEmail(true);
    };

    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img
                        src="/img/logo_sito_-removebg-preview.png"
                        alt="Logo"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <Modal.Title>Benvenuto su Critical20!</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <p>Inserisci la tua email per ricevere il messaggio di benvenuto:</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Inserisci la tua email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="warning" type="submit" className="w-100">
                        Invia
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
