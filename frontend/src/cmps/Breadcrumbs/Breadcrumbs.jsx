
import React from 'react'

import './Breadcrumbs.scss'
import Icon from '../Icon/Icon';

const Breadcrumbs = () => {

    return (
        <div className="breadcrumbs flex align-center container">
            Entities<span className="current flex align-center"><Icon className="pi pi-angle-left"></Icon>Entitie ID: #567</span>
        </div>
    )


}

export default Breadcrumbs
