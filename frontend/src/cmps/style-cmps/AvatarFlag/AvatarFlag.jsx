
import React from 'react'

import './AvatarFlag.scss'

const AvatarFlag = ({ name, className }) => {

    return (
        <>
            <img className={`flag-image ${className ? className : ''}`} alt={name} src="https://www.countryflags.io/it/shiny/64.png" width={32} style={{ verticalAlign: 'middle', borderRadius: '15px' }} />
            <span>{name}</span>
        </>
    )


}

export default AvatarFlag
