
import React, { useState, useEffect } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';
import './BtrustData.scss'
import { btrustService } from 'services/BtrustService';
import Organization from 'cmps/Organization/Organization';
import Client from 'cmps/Client/Client';
import Broker from 'cmps/Broker/Broker';

const BtrustData = () => {
    const [organizationData, setOrganizationData] = useState(null)
    const [clientData, setClientData] = useState(null)
    const [brokerData, setBrokerData] = useState(null)
    const fetchData = async () => {
        try {
            const data = await btrustService.getData()
            const { broker_data, client_data, organization_data } = data
            setOrganizationData(organization_data)
            setClientData(client_data)
            setBrokerData(broker_data)
        } catch (err) {
            console.error('ERROR!', err)
        }

    }
    useEffect(() => {
        fetchData()

    }, [])
    if (!organizationData || !clientData || !brokerData) return <div className="flex center-center"><ProgressSpinner /></div>
    return (
        <section className="btrust-data">
            <Organization organizationData={organizationData} />
            <Client clientData={clientData} />
            <Broker brokerData={brokerData} />
        </section>
    )
}

export default BtrustData
