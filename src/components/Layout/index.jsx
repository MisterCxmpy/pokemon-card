import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import styles from './styles.module.css'

export default function Layout() {
    return (
        <div>
            <header className={styles["nav-bar"]}>
                <h1>Pokemandem</h1>

                <nav>
                    <NavLink to={'/'}>Single mandem</NavLink>
                    <NavLink to={'/all'} >Mandeezy</NavLink>
                </nav>
            </header>

            <div className={styles["main"]}>
                <Outlet />
            </div>

            <footer className={styles["footer"]}>
                made with ❤️ by <a href="https://github.com/MisterCxmpy" target="_blank" rel="noopener noreferrer">josh</a> and <a href="http://github.com/sord-dev" target="_blank" rel="noopener noreferrer">stef</a>
            </footer>
        </div>
    )
}