import { useEffect, useState } from "react";

//Style
import "../style/productlistpagestyle.css";

// Component
//Card Griglia
import PLCardGrid from "../components/PLCardGrid";
// Crad Lista
import PLCardList from "../components/PLCardLIst";

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
          <PLCardList game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

// {
//   /* // Card Griglia
//             <PLCardGrid game={game} key={game.id} />*/
// }
