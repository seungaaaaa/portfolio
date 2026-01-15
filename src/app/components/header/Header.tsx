import React from 'react'
import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <a href='#hero'><h2>SeungA</h2></a>
                <nav className={styles.nav}>
                    <a href='#project'>Projects
                    </a>
                    <a href='#skill'>Skills
                    </a>
                    <a href='#about'>About Me
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header