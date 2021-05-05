
import React from 'react'

import './AppHeader.scss'
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import NavBarUserActions from '../NavBarUserActions/NavBarUserActions';

const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="header-container flex align-center relative space-between">
                <Logo />
                <Navbar />
                <NavBarUserActions />
            </div>
        </header>
    )
}

export default AppHeader
