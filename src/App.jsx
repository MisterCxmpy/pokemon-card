import { useState, useEffect } from 'react'
import Card from "./components/Card"
import Search from "./components/Search"
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  async function GetPokemon() {
    const api = `https://pokeapi.co/api/v2/pokemon/pikachu`

    const response = await fetch(api)
    const data = await response.json()
    setPokemon(data)
  }

  useEffect(() => {
    GetPokemon()
    console.log(pokemon)
  }, [])

  return (
    <div>
      <Search setPokemon={setPokemon}/>
      <Card pokemon={pokemon}/>
    </div>
  )
}

export default App
