import { useEffect, useState } from "react";

export default function Paginadiprova() {
  //string per un solo valore per volta
  const [difficulty, setDifficulty] = useState("");
  const [products, setProducts] = useState([]);

  // chiata fetch che chiama difficulty
  useEffect(() => {
    if (!difficulty) return; // non chiama
    fetch(`http://localhost:3030/api/products?difficulty=${difficulty}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.results))
      .catch((err) => console.error("errore ", err));
  }, [difficulty]);
  return (
    <>
      <div className="bg-light containerfilter">
        <div className="difficulty">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkFacile"
              checked={difficulty === "facile"}
              onChange={() =>
                setDifficulty(difficulty === "facile" ? "" : "facile")
              }
            />
            <label className="form-check-label" htmlFor="checkFacile">
              Facile
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkMedio"
              checked={difficulty === "medio"}
              onChange={() =>
                setDifficulty(difficulty === "medio" ? "" : "medio")
              }
            />
            <label className="form-check-label" htmlFor="checkMedio">
              Medio
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkDifficile"
              checked={difficulty === "difficile"}
              onChange={() =>
                setDifficulty(difficulty === "difficile" ? "" : "difficile")
              }
            />
            <label className="form-check-label" htmlFor="checkDifficile">
              Difficile
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-4">
            <div className="card">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>Difficoltà: {p.difficulty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
