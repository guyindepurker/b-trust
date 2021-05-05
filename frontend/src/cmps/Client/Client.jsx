
import React from 'react'

import DataTitle from 'cmps/style-cmps/DataTitle/DataTitle';
import Card from 'cmps/style-cmps/Card/Card';


const Client = ({ clientData }) => {
    const titleKeys = Object.keys(clientData)
    const cards = [{ type: 'Grid', data: clientData[titleKeys[0]], title: titleKeys[0] }, { type: 'Grid', data: clientData[titleKeys[1]], title: titleKeys[1] }, { type: 'Grid', data: clientData[titleKeys[2]], title: titleKeys[2] }, { type: 'Risk', data: clientData[titleKeys[3]], title: titleKeys[3] }]
    return (
        <section className="client-data">
            <DataTitle title="client data" />
            {cards.map((cCard, key) => <Card key={key} title={cCard.title} type={cCard.type} data={cCard.data} />)}
        </section>
    )



}

export default Client
