import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import DetailsProductPage from "./pages/DetailsProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";

import PageCheckout from "./pages/PageCheckout";
import PageNotFoundProduct from "./pages/PageNotFoundProduct";
function App() {
  // Carrello
  const [productCart, setProductCart] = useState(() => {
    const saved = localStorage.getItem("productCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(productCart));
  }, [productCart]);

  //Wishlist
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <DefaultLayout
              productCart={productCart}
              setProductCart={setProductCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:slug" element={<DetailsProductPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/products/:slug*" element={<PageNotFoundProduct />} /> */}
          {/* <Route path="/prova" element={<PaginadiProva />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
