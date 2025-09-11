import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import DetailsProductPage from "./pages/DetailsProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import PageCheckout from "./pages/PageCheckout";

function App() {
  const [productCart, setProductCart] = useState(() => {
    const saved = localStorage.getItem("productCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(productCart));
  }, [productCart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <DefaultLayout
              productCart={productCart}
              setProductCart={setProductCart}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:slug" element={<DetailsProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/prova" element={<PaginadiProva />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
