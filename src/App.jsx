import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

// Pagine
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import DetailsProductPage from "./pages/DetailsProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import PaginadiProva from "./pages/Paginadiprova";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:slug" element={<DetailsProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/prova" element={<PaginadiProva />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
