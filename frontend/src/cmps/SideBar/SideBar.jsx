
import React from 'react'

import './SideBar.scss'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import BusinessName from '../BusinessName/BusinessName';
import BusinessDetails from '../BusinessDetails/BusinessDetails';
import SideBarNavigation from '../SideBarNavigation/SideBarNavigation';

const SideBar = () => {
const details = {status:'Approved',businessCategory:'Client',creationDate:'15/03/2020',updated:'2 Days ago By Case'}
    return (
        <aside className="side-bar">
        <Breadcrumbs />
        <BusinessName name="Assicurazioni Generali SPA" />
        <BusinessDetails details={details} />
        <SideBarNavigation />
        </aside>
    )

   
}

export default SideBar
