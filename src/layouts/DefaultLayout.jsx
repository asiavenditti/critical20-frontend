import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalEmail from "../components/ModalEmail";
import { Outlet } from "react-router";

export default function DefaultLayout({
  productCart,
  setProductCart,
  wishlist,
  setWishlist,
}) {
  return (
    <>
      <Header
        productCart={productCart}
        setProductCart={setProductCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <Outlet
        context={{ productCart, setProductCart, wishlist, setWishlist }}
      />
      <Footer />
      {/*  MONTAGGIO DELLA MODALE */}
      <ModalEmail />
    </>
  );
}
