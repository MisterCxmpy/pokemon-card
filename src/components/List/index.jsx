import React from 'react'
import styles from './styles.module.css'

import Card from '../Card/Card'

export function List({ pokemon = [] }) {
  return (
    <div className={styles["item-list"]}>
        {pokemon.length ? pokemon.map(p => <Card pokemon={p} key={p.name}/>) : <h2>No items.</h2>}
    </div>
  )
}

function Item({ name }) {
    return (
        <div>
            { name }
        </div>
    )
}
