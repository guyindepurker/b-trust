
import React from 'react'
import './Logo.scss'
import logo from 'assets/imgs/logo.png'
const Logo = () => {

    return (
        <div className="logo flex align-center">
            <img className="logo-img" src={logo} alt="logo img"/>
            <span className="logo-txt">B-Trust</span>
        </div>
    )

   
}

export default Logo
