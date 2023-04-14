import { useRefresh } from "../context/RefreshContext";

export default function Button({ setPokemon }) {
  const { refresh, setRefresh } = useRefresh();

  const getRandomPokemon = async () => {
    if (!refresh) setRefresh(true);

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();

      const totalPokemon = data.count;
      const randomIndex = Math.floor(Math.random() * totalPokemon);
      const randomPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomIndex}`;
      const randomRes = await fetch(randomPokemonUrl);

      if (!randomRes.ok) {
        getRandomPokemon();
        return;
      }
      
      const randomData = await randomRes.json();
      setPokemon(randomData);
    } catch (error) {
      console.error(error);
    }
  }

  return <button id="random" onClick={getRandomPokemon}>Random</button>;
}
