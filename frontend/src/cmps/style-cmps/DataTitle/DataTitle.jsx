
import React from 'react'

import './DataTitle.scss'
import Icon from '../../Icon/Icon';

const DataTitle = ({ title }) => {

    return (
        <h3 className="data-title flex align-center">
            {title} <Icon className="pi pi-angle-down" />
        </h3>
    )


}

export default DataTitle
