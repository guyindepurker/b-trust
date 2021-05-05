
import React from 'react'

import DataTitle from 'cmps/style-cmps/DataTitle/DataTitle';
import Card from 'cmps/style-cmps/Card/Card';
import _ from 'lodash'
const Organization = ({ organizationData }) => {
    const titleKeys = Object.keys(organizationData)
    const newContent = <span className="new-content"> + New Content</span>
    const cards = [{ type: 'Simple', data: organizationData[titleKeys[0]], title: titleKeys[0] }, { type: 'Table', data: organizationData[titleKeys[1]], title: titleKeys[1] }, { type: 'Table', data: organizationData[titleKeys[2]], title: titleKeys[2], cardTitleChildren: newContent }]
    return (
        <section className="Organization">
            <DataTitle title='organization Data' />
            {cards.map((cCard, key) => <Card key={key} data={cCard.data} type={cCard.type} cardTitleChildren={cCard?.cardTitleChildren} title={cCard.title} />)}
        </section>
    )


}

export default Organization
