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
  const [alertType, setAlertType] = useState("");

  // Funzione per triggerare alert globale
  const triggerAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
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
      <Alert message={alertMessage} show={showAlert} type={alertType} />
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
