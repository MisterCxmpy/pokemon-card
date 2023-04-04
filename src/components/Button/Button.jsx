export default function Button({setPokemon}) {

  async function GetRandomPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();

    const pokemonList = data.results.filter(
      pokemon => pokemon.url !== 'https://pokeapi.co/api/v2/pokemon/10091/'
    );

    const totalPokemon = pokemonList.length;

    const randomIndex = Math.floor(Math.random() * totalPokemon);

    const randomPokemonUrl = pokemonList[randomIndex].url;

    const randomRes = await fetch(randomPokemonUrl);
    const randomData = await randomRes.json();

    if (!randomData.id || !randomData.name || !randomData.sprites.front_default) {
      GetRandomPokemon();
    } else {
      setPokemon(randomData);
    }
  }

  return (
    <button id="random" onClick={GetRandomPokemon}>Random</button>
  )
}
