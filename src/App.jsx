import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
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
        <h1>Wicked Pokemon Card App</h1>
        <Search setPokemon={setPokemon} />
      </header>
      {loading ? <p>Loading...</p> : <Card pokemon={pokemon} />}
      <Button setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
