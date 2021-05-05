
import React from 'react'

import './BusinessName.scss'
import Icon from '../Icon/Icon';

const BusinessName = ({ name }) => {

    return (
        <section className="business-name flex align-center">
            <div className="icon-container flex center-center">
                <Icon className="far fa-city" />
            </div>
            <span className="business-title">{name}</span>
        </section>
    )


}

export default BusinessName
