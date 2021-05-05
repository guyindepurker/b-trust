
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Avatar } from 'primereact/avatar';

import './NavBarUserActions.scss'
import Icon from '../Icon/Icon';

const NavBarUserActions = () => {
    const [city, setCity] = useState('Italy')
    const citySelectItems = ['Italy', 'Israel', 'France', 'Brazil']
    const Li = ({ children }) => <li className="user-menu-item">{children}</li>
    const icons = [{ className: 'pi pi-bell', size: 'big' }, { className: 'pi pi-cog', size: null }].map((icon, key) => <Li key={key}>{<Icon className={icon.className} />}</Li>)
    return (
        <ul className="nav-bar-user-actions flex align-center clean-list">
            <Li><Dropdown className="drop-down" value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} ></Dropdown></Li>
            {icons}
            <Li><Avatar label="OP" className="p-mr-2" style={{ opacity: 0.8, backgroundColor: '#AB84B7', color: '#ffffff' }} shape="circle" /></Li>
        </ul>
    )


}

export default NavBarUserActions
