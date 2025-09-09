import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Component

import PLCardGrid from "../components/PLCardGrid";

export default function ProductListPage() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = "http://localhost:3030/api/products";
  const img = "/img/logo_sito_-removebg-preview.png";

  useEffect(() => {
    // fetch
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-light mb-4 pt-5 text-center">I NOSTRI GIOCHI</h1>

      {/* Filtro allineato a sinistra */}
      <div className="d-flex justify-content-start mb-4">
        <form className="d-flex w-100" role="search">
          <input
            type="search"
            className="form-control bg-light w-25"
            placeholder="Inserisci il tuo gioco..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="row g-4 mb-5">
        {filteredGames.map((game) => (
          <PLCardGrid game={game} />

          //   <div key={game.id} className="col-12 col-md-6 col-lg-4">
          //     <div className="card bg-light products-card h-100">
          //       <img
          //         src={game.file_paths[0]}
          //         alt={game.name}
          //         className="mx-auto d-block mt-3"
          //         style={{
          //           width: "150px",
          //           height: "150px",
          //           objectFit: "cover",
          //         }}
          //       />
          //       {/* Corpo della card con testo centrato */}
          //       <div className="card-body text-center">
          //         <h5 className="card-title">{game.name}</h5>
          //         <p className="card-text">{game.description}</p>
          //         <p className="card-text">
          //           {game.price !== game.original_price ? (
          //             <>
          //               <span className="text-muted text-decoration-line-through me-2">
          //                 €{game.original_price}
          //               </span>
          //               <span className="fw-bold text-success">
          //                 €{game.price}
          //               </span>
          //             </>
          //           ) : (
          //             <span className="fw-bold">€{game.price}</span>
          //           )}
          //         </p>

          //         {/* Link al dettaglio o azione */}
          //         <Link to={`/products/${game.slug}`} className="btn btn-primary">
          //           Vai al gioco
          //         </Link>
          //       </div>
          //     </div>
          //   </div>
        ))}
      </div>
    </div>
  );
}
