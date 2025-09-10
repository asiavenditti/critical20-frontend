import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalEmail from "../components/ModalEmail";
import { Outlet } from "react-router";

export default function DefaultLayout({ productCart, setProductCart }) {
    return (
        <>
            <Header productCart={productCart} setProductCart={setProductCart} />
            <Outlet context={{ productCart, setProductCart }} />
            <Footer />
            {/*  MONTAGGIO DELLA MODALE */}
            <ModalEmail />
        </>
    );
}
