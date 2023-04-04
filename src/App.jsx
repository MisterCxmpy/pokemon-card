import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  async function GetPokemon() {
    const api = `https://pokeapi.co/api/v2/pokemon/pikachu`;

    setLoading(true);

    try {
      const response = await fetch(api);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    GetPokemon();
  }, []);

  return (
    <div>
      <header>
        <Search setPokemon={setPokemon} />
      </header>
      {loading ? <p>Loading...</p> : <Card pokemon={pokemon} />}
    </div>
  );
}

export default App;
