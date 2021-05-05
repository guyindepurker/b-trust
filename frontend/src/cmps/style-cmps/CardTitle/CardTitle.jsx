
import React from 'react'

import './CardTitle.scss'
import _ from 'lodash'
const CardTitle = ({ title, children }) => {

    return (
        <div className="card-title flex align-center space-between">
            <h2 className="card-main-title">{_.lowerCase(title)}</h2> {children}
        </div>
    )


}

export default CardTitle
