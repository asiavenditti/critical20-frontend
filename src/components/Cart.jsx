import React from "react";
import CardCart from "./CardCart";

export default function Cart({ productCart, setProductCart }) {
    return (
        <CardCart productCart={productCart} setProductCart={setProductCart} />
    );
}
