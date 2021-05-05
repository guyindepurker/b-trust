
import React from 'react'

import './BusinessDetails.scss'
import _ from 'lodash'
const BusinessDetails = ({ details }) => {
    const keys = Object.keys(details)
    const Li = ({ children }) => <li className="item-details">{children}</li>

    return (
        <ul className="business-details clean-list container">
            {keys.map((key, i) => <Li key={i}><span className="details-title">{_.lowerCase(key)}:</span><span className={`details-content ${i === 0 ? 'status' : ''} `}>{details[key]}{key === 'updated' ? <span className="blue"> #C1582473</span> : ''}</span></Li>)}
        </ul>
    )


}

export default BusinessDetails
