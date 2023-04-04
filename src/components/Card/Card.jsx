import "./Card.css"
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

export default function Card({pokemon}) {
  const cardRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
      reverse: false,
    });
  }, []);

  return (
    <div className={`card ${pokemon.types[0].type.name}`} ref={cardRef}>
      <div className="card-picture">
        <img src={pokemon.sprites.other["official-artwork"].front_default}/>
      </div>
      <div className="card-info">
        <p className="card-name">{pokemon.name}</p>
        <ul className="stats">
          <li className="stat">HP: {pokemon.stats[0].base_stat}</li>
          <li className="stat">Attack: {pokemon.stats[1].base_stat}</li>
          <li className="stat">Defense: {pokemon.stats[2].base_stat}</li>
          <li className="stat">Special Attack: {pokemon.stats[3].base_stat}</li>
          <li className="stat">Special Defence: {pokemon.stats[4].base_stat}</li>
          <li className="stat">Speed: {pokemon.stats[5].base_stat}</li>
        </ul>
      </div>
    </div>
  )
}