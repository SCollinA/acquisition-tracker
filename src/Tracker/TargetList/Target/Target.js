import React from 'react'
import uuid from 'uuid'
import './Target.css'
import TrackerContext from '../../../Context/TrackerContext'

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({ selectTarget }) => (
                <div 
                    className='Target'
                    onClick={() => selectTarget(target)}
                >
                    <h3>{target.info.name || 'No Name'}</h3>
                    <h3>{target.status}</h3>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}

export const statusTypes = [
    'Approved',
    'Pending approval',
    'Researching',
    'Denied',
]

export class Target {
    constructor({
        name, 
        address,
        employeesCount,
        foundedDate,
        isPublic,
        revenue,
        netIncome,
        totalEquity,
        stockPrice,
        contacts
    }) {
        this.id = uuid()
        this.info = {
            name,
            address,
            employeesCount,
            foundedDate,
            isPublic,
        }
        this.keyMetrics = {
            revenue,
            netIncome,
            totalEquity,
            stockPrice,
        }
        this.contacts = contacts || []
        this.status = statusTypes[2]
    }
}