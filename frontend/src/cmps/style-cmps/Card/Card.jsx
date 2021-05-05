
import React from 'react'

import './Card.scss'
import CardTitle from '../CardTitle/CardTitle';
import _ from 'lodash'
import CustomTable from '../CustomTable/CustomTable';
import CheckSymbol from '../CheckSymbol/CheckSymbol';
import AvatarFlag from '../AvatarFlag/AvatarFlag';

const Card = ({ title, cardTitleChildren, data, type }) => {
    const componentTypes = {
        Simple, Table, Risk, Grid
    }
    const ComponentToRender = componentTypes[type]
    return (
        <div className="card">
            <CardTitle title={title}>{cardTitleChildren}</CardTitle>
            <div className="card-content">
                <ComponentToRender data={data} />
            </div>
        </div>
    )


}
export default Card
// TYPES LAYOUT CARD CONTENT: //

const Simple = ({ data }) => {
    const keys = Object.keys(data)
    const Li = ({ children }) => <li className="simple-item flex column">{children}</li>
    return (
        <ul className="clean-list type-simple  flex space-around wrap">
            {keys.map((key, i) => <Li key={i}><span className="title">{_.lowerCase(key)}</span><span className="content">{data[key]}</span></Li>)}
        </ul>
    )
}

const Table = ({ data }) => {
    return (<CustomTable data={data} />)
}

const Risk = ({ data }) => {
    const keys = Object.keys(data)
    const statusesColors = { low: '#31C340', medium: '#FDA300' }
    
    const Li = ({ value, title }) => {
        let newValue
        let style = {}
        if (typeof value === 'boolean') {
            newValue = <CheckSymbol expression={value} />
        } else if (value === 'low' || value === 'medium') {
            style.backgroundColor = statusesColors[value]
            style.borderRadius = '15px'
            style.padding = '5px 10px'
            style.color = 'white'
            newValue = value
        }
        return <li className="risk-item flex align-center"><span className="title">{title}</span><span className="content flex center-center" style={style}>{newValue}</span></li>
    }
    const LiNote = ({ children, title }) => <li className="risk-item note flex column"><span className="title">{title}</span><p className="risk-item-column">{children}</p></li>
    return (
        <ul className="clean-list type-risk flex wrap">
            {keys.map((key, i) => key === 'note' ? <LiNote title={_.lowerCase(key)}>{data[key]}</LiNote> : <Li title={_.lowerCase(key)} value={data[key]} key={i} />)}
        </ul>)
}

const Grid = ({ data }) => {
    const keys = Object.keys(data)
    const Li = ({ children }) => <li className="grid-item flex center-center column">{children}</li>
    return (<ul className="clean-list type-grid">

        {keys.map((key, i) => (<Li key={i}><span className="title">{_.lowerCase(key)}</span>
            <span className={`${data[key].length > 50 ? 'p' : 'content'} `}>
                {(typeof data[key] === 'boolean') ? <CheckSymbol expression={data[key]} size="big" /> : data[key].includes('Italy') ? (<AvatarFlag name={data[key]} />) : data[key]}

            </span></Li>))}
    </ul>)
}