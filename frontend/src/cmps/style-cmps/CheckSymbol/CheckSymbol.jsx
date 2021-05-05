
import React from 'react'

import './CheckSymbol.scss'
import Icon from '../../Icon/Icon';

const CheckSymbol = ({ expression, size }) => {
    const className = expression ? `check-symbol fad fa-check-circle ${size === 'big' ? 'big' : ''}` : `check-symbol fad fa-times-circle ${size === 'big' ? 'big' : ''}`
    return (
        <Icon className={className} />
    )


}

export default CheckSymbol
