import React, { useEffect, useState } from 'react'
import { List } from '../../components/List'

import styles from './all.module.css'

export function AllPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [activeType, setActiveType] = useState(null);


    const changeType = async type => {
        let result = await (await fetch(`https://pokeapi.co/api/v2/type/${type}`)).json()


        let data = result.pokemon.map(async (p, i) => {
            if(i <= 20) {
                let meta = await (await fetch(p.pokemon.url)).json();

                return { ...p.results, ...meta }
            }
            else return
        })

        let allUnfiltered = await Promise.all(data)
        let all = allUnfiltered.filter((a) => a && a)

        setPokemon(all)
        setActiveType(type)
    }

    useEffect(() => {
        const getAllPokemon = async () => {
            let pokemon = await (await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20')).json();

            let data = pokemon.results.map(async (p) => {
                let meta = await (await fetch(p.url)).json();

                return { ...p.results, ...meta }
            })

            let all = await Promise.all(data)
            setPokemon(all)
            setActiveType(null)
        }

        const getTypes = async () => {
            let types = await (await fetch('https://pokeapi.co/api/v2/type')).json();

            setTypes(types.results)
        }

        getAllPokemon()
        getTypes()
    }, [])

    return (
        <div>
            <h1>All Pokemon</h1>

            <Filters {...{ types, onClick: changeType, activeType }} />
            <List {...{ pokemon }} />
        </div>
    )
}

const Filters = ({ types = [], onClick, activeType }) => {
    return (
        <div className={styles["filters-list"]}>
            {types.length ? types.map(t => <Type key={t.name} {...t} activeType={activeType} onClick={onClick} />) : <p>Loading...</p>}
        </div>
    )
}

const Type = ({ name, onClick, activeType }) => {
    return (
        <div className={(activeType == name) ? `${styles.type} ${styles.active}` : styles.type}  onClick={() => onClick(name)}>
            {name}
        </div>
    )
}