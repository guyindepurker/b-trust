
import React from 'react'

import './SideBarNavigation.scss'

const SideBarNavigation = () => {
    const links = ['Data', 'Mandates', 'Beneficial Owners', 'Cases', 'Resources', 'Audit Logs']
    const Li = ({ className, children }) => <li className={`nav-item flex align-center ${className ? className : ''}`}>{children}</li>
    return (
        <ul className="side-bar-navigation clean-list">
            {links.map((link, key) => <Li key={key} className={key === 0 ? 'active' : ''}>{link}{key === 1 && <div className="badge flex center-center">5</div>}</Li>)}
        </ul>
    )


}

export default SideBarNavigation
