
import React from 'react'
import './Navbar.scss'




const Navbar = () => {


    const links = ['Dashboard', 'Search', 'Mandates', 'Cases', 'Entities', 'Biometrics']
    const Link = ({ link }) => {
        return <li className={`nav-link flex align-center ${link === 'Entities' ? 'active' : ''}`}>{link}</li>
    }
    return (
        <nav className="navbar">
            <ul className="main-nav flex  align-center clean-list">
                {links.map((link, key) => <Link link={link} key={key} />)}
            </ul>
        </nav>
    )


}

export default Navbar
