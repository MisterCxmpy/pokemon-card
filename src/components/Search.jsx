import { useEffect, useState } from "react"

export default function Search({setPokemon}) {
  const [inputField, setInputField] = useState("")
  const [pokemonName, setPokemonName] = useState("")

  function handleInput(e) {
    setInputField(e.target.value)
  }

  async function GetPokemon(pokemon) {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
      const response = await fetch(api)
      const data = await response.json()
      setPokemon(data)
    } catch (e) {
      console.log(e)
    }
  }

  function GetName(e) {
    e.preventDefault()
    setPokemonName(inputField)
    GetPokemon(inputField)
  }

  return (
    <form onSubmit={GetName}>
      <input value={inputField} type="text" onChange={handleInput}/>
      <button type="submit">Search</button>
    </form>
  )
}