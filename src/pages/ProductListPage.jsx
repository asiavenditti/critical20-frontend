import { useEffect, useState, useRef, useCallback } from "react";
// per sincronizzare i filtri con l’URL
import { useSearchParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
// Style
import "../style/productlistpagestyle.css";

// Componenti Card
import PLCardGrid from "../components/PLCardGrid";
import PLCardList from "../components/PLCardLIst";

export default function ProductListPage() {
  const [games, setGames] = useState([]);
  const [totalpages, setTotalpages] = useState(1);
  const [grid, setGrid] = useState(true);
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]); // categorie dal backend

  const url_base = "http://localhost:3030/api/products";

  // Hook per leggere/scrivere i parametri dall’URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Recupero i valori dai parametri dell’URL
  const searchTerm = searchParams.get("name") || "";
  const category = searchParams.get("category") || "";
  const editor = searchParams.get("editor") || "";
  const age = searchParams.get("age") || "";
  const players = searchParams.get("players") || "";
  const difficulty = searchParams.get("difficulty") || "";
  const sort = searchParams.get("sort") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const [totalResults, setTotalResults] = useState(0);

  // Funzione per aggiornare i parametri nell’URL
  const updateParam = (key, value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      // resetto la pagina quando cambio filtro
      if (key !== "page") {
        params.set("page", 1);
      }
      return params;
    });
  };

  // Costruisco l’URL finale per la fetch
  const build_url = () => {
    return `${url_base}?${searchParams.toString()}`;
  };

  // Fetch dei giochi
  useEffect(() => {
    const final_url = build_url();
    setLoading(true);

    fetch(final_url)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setGames(data.results); // reset lista
        } else {
          setGames((prev) => [...prev, ...data.results]); // append
        }
        setTotalpages(data.totalPages);
        setTotalResults(data.total || 0);
        setLoading(false);
      });
  }, [searchParams]);

  // Fetch delle categorie (solo una volta)
  useEffect(() => {
    fetch("http://localhost:3030/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // IntersectionObserver per infinite scroll
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < totalpages) {
          // incremento la pagina nell’URL → triggera useEffect
          setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("page", page + 1);
            return params;
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, page, totalpages, setSearchParams]
  );

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-light mb-4 pt-5 text-center">I NOSTRI GIOCHI</h1>

        {/* 🔍 FILTRI IN ALTO */}
        <div className="border p-3 rounded p-3 mb-4">
          <div className="row g-4">
            {/* Ricerca per nome */}
            <div className="col-md-6">
              <input
                type="search"
                className="form-control"
                placeholder="Cerca gioco..."
                value={searchTerm}
                onChange={(e) => updateParam("name", e.target.value)}
              />
            </div>

            {/* Editor */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Editor..."
                value={editor}
                onChange={(e) => updateParam("editor", e.target.value)}
              />
            </div>

            {/* Categoria (commentata) */}

            {/* Difficoltà */}
            <div className="col-md-4">
              <select
                className="form-select"
                value={difficulty}
                onChange={(e) => updateParam("difficulty", e.target.value)}
              >
                <option value="">Tutte le difficoltà</option>
                <option value="facile">Facile</option>
                <option value="medio">Medio</option>
                <option value="difficile">Difficile</option>
              </select>
            </div>

            {/* Ordinamento */}
            <div className="col-md-4">
              <select
                className="form-select"
                value={sort}
                onChange={(e) => updateParam("sort", e.target.value)}
              >
                <option value="">Ordina per...</option>
                <option value="name_asc">Nome A-Z</option>
                <option value="name_desc">Nome Z-A</option>
                <option value="price_asc">Prezzo crescente</option>
                <option value="price_desc">Prezzo decrescente</option>
              </select>
            </div>

            {/* Età minima */}
            <div className="col-md-2 ms-auto">
              <input
                type="number"
                className="form-control"
                placeholder="Età min."
                value={age}
                onChange={(e) => updateParam("age", e.target.value)}
              />
            </div>

            {/* Numero giocatori */}
            <div className="col-md-2 me-auto">
              <input
                type="number"
                className="form-control"
                placeholder="Giocatori"
                value={players}
                onChange={(e) => updateParam("players", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Messaggi risultati */}
        <div className="mt-3 d-flex">
          {totalResults > 0 && (
            <p className="text-light text-center fs-4 fw-semibold mb-0">
              {totalResults} risultati trovati
            </p>
          )}
          {totalResults === 0 && !loading && (
            <p className="text-danger text-center fs-4 fw-semibold mb-0">
              Nessun risultato per la ricerca
            </p>
          )}

          {/* Bottoni vista */}
          <button
            className={`btn ms-auto ${
              grid ? "btn-light text-dark" : "btn-outline-light"
            }`}
            onClick={() => setGrid(true)}
          >
            vista griglia
          </button>
          <button
            className={`btn ms-2 ${
              !grid ? "btn-light text-dark" : "btn-outline-light"
            }`}
            onClick={() => setGrid(false)}
          >
            vista lista
          </button>
        </div>

        {/* 🎴 LISTA GIOCHI */}
        <div className={grid ? "grid g-4 row mt-5" : "list mt-5"}>
          {games.map((game) =>
            grid ? (
              <PLCardGrid game={game} key={game.id} />
            ) : (
              <PLCardList game={game} key={game.id} />
            )
          )}
        </div>

        {/*  Sentinel per infinite scroll */}
        <div ref={lastElementRef} style={{ height: "40px" }} />

        {loading && <p className="text-center text-light">Caricamento...</p>}
      </div>
    </>
  );
}
