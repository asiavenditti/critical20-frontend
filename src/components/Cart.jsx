import React from "react";
import CardCart from "./CardCart";

// Questo componene si trova nella Header

export default function Cart({ productCart, setProductCart, showLink }) {
  return (
    <CardCart
      productCart={productCart}
      setProductCart={setProductCart}
      showLink={true}
    />
  );
}
