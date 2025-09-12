import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalEmail from "../components/ModalEmail";
import Alert from "../components/Alert";
import { Outlet } from "react-router";
import { useState } from "react";

export default function DefaultLayout({
  productCart,
  setProductCart,
  wishlist,
  setWishlist,
}) {
  // Stato per l'alert
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Funzione per triggerare alert globale
  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <Header
        productCart={productCart}
        setProductCart={setProductCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />

      {/* Alert globale */}
      <Alert message={alertMessage} show={showAlert} />
      <ModalEmail triggerAlert={triggerAlert} />

      {/* Outlet con context */}
      <Outlet
        context={{
          productCart,
          setProductCart,
          wishlist,
          setWishlist,
          triggerAlert,
        }}
      />

      <Footer />
      <ModalEmail />
    </>
  );
}
