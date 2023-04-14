import { useRefresh } from "../context/RefreshContext";

export default function Button({setPokemon}) {

  const { refresh, setRefresh } = useRefresh()

  async function GetRandomPokemon() {
    if (refresh) return

    setRefresh(true)

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();

    const totalPokemon = data.count;

    const randomIndex = Math.floor(Math.random() * totalPokemon);

    const randomPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomIndex}`;

    const randomRes = await fetch(randomPokemonUrl);

    if (!randomRes.ok) {
      GetRandomPokemon();
    }

    const randomData = await randomRes.json();
    
    setPokemon(randomData);
  }

  

  return (
    <button id="random" onClick={GetRandomPokemon}>Random</button>
  )
}
