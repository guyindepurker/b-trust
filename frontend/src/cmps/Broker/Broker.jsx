
import React from 'react'

import DataTitle from 'cmps/style-cmps/DataTitle/DataTitle';
import Card from 'cmps/style-cmps/Card/Card';

const Broker = ({ brokerData }) => {
    const titleKeys = Object.keys(brokerData)
    const cards = [{ type: 'Grid', title: titleKeys[0], data: brokerData[titleKeys[0]] }, { type: 'Risk', title: titleKeys[1], data: brokerData[titleKeys[1]] }, { type: 'Grid', title: titleKeys[2], data: brokerData[titleKeys[2]] }, { type: 'Grid', title: titleKeys[3], data: brokerData[titleKeys[3]] }]
    return (
        <section className="broker-data">
            <DataTitle title="broker data" />
            {cards.map((cCard, key) => <Card key={key} title={cCard.title} data={cCard.data} type={cCard.type} />)}
        </section>
    )


}

export default Broker
