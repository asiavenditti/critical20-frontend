import React from "react";
import { useOutletContext } from "react-router-dom";
import CardCart from "../components/CardCart"; // percorso corretto

export default function CartPage() {
  const { productCart, setProductCart } = useOutletContext();

  return <CardCart productCart={productCart} setProductCart={setProductCart} />;
}
