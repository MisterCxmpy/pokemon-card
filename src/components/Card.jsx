import "./Card.css"

export default function Card({pokemon}) {
  return (
    <div className="card">
      <div className="card-picture">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"/>
      </div>
      <div className="card-info">
        <p className="card-name">Pikachu</p>
        <ul className="stats">
          <li className="stat">HP: {pokemon["stats"][0]["base_stat"]}</li>
          <li className="stat">Attack: {pokemon["stats"][1]["base_stat"]}</li>
          <li className="stat">Defense: {pokemon["stats"][2]["base_stat"]}</li>
          <li className="stat">Special Attack: {pokemon["stats"][3]["base_stat"]}</li>
          <li className="stat">Special Defence: {pokemon["stats"][4]["base_stat"]}</li>
          <li className="stat">Speed: {pokemon["stats"][5]["base_stat"]}</li>
        </ul>
      </div>
    </div>
  )
}
