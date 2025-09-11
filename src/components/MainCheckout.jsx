import CardCart from "./CardCart";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function MainCheckout() {
  const { productCart, setProductCart } = useOutletContext();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [message, setMessage] = useState("");

  // Resetta form quando la modale viene chiusa

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
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  return (
    <>
      <main className="py-5 my-5">
        <div className="container ">
          <div className="row row-cols-1 row-cols-xl-2  g-2">
            <div className="col">
              <CardCart
                productCart={productCart}
                setProductCart={setProductCart}
              />
            </div>
            <div className="col">
              <div className="card h-100 ">
                <div className="card-body">
                  {message && <p className="text-center fw-bold">{message}</p>}

                  {/* Form */}
                  <form className="h-100" onSubmit={handleSubmit}>
                    <div className="h-100">
                      {" "}
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
                          placeholder="Indirizzo di fatturazione"
                          value={discountCode} // valore indirizzo fatturazione
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Indirizzo di spedizione"
                          value={discountCode} // valore indirizzo spedizione
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Numero di telefono"
                          value={discountCode} // valore numero di telefono
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 py-3 border-top border-black">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Codice sconto (opzionale)"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success">
                          Conferma e Paga
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Annulla
                        </button>
                      </div>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
