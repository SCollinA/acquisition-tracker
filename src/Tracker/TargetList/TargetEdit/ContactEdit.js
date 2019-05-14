import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'
import { Contact } from '../Contact/Contact'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editingTarget, editTarget }) => (
                <fieldset className='ContactEdit'>
                    <legend>Contacts</legend>
                    {editingTarget.contacts &&
                    editingTarget.contacts.map((contact, index) => (
                        <div key={index} className='contactEditInputs'>
                            <input
                                type='text' 
                                name='contactName'
                                placeholder='Contact Name'
                                value={contact.name}
                                onChange={({ target }) => {
                                    contact.name = target.value
                                    editTarget({
                                        ...editingTarget,
                                        contacts: editingTarget.contacts
                                    })
                                }}
                            />
                            <input 
                                type='tel' 
                                name='contactPhone'
                                placeholder='Phone Number'
                                value={contact.phoneNumber}
                                onChange={({ target }) => {
                                    contact.phoneNumber = target.value
                                    editTarget({
                                        ...editingTarget,
                                        contacts: editingTarget.contacts
                                    })
                                }}
                            />
                            <input
                                type='button'
                                className='removeContact'
                                onClick={event => {
                                    event.stopPropagation()
                                    if (window.confirm('Are you sure?')) {
                                        editTarget({
                                            ...editingTarget,
                                            contacts: [
                                                ...editingTarget.contacts.filter(currentContact => {
                                                    return currentContact.id !== contact.id
                                                })
                                            ]
                                        })
                                    }
                                }}
                                value='Remove'
                            />
                        </div>
                    ))}
                    <input 
                        type='button' 
                        className='addContact'
                        value='Add Contact'
                        onClick={event => {
                            event.stopPropagation()
                            editTarget({
                                ...editingTarget,
                                contacts: [
                                    ...editingTarget.contacts,
                                    new Contact()
                                ].sort(compareContacts)
                            })
                        }}
                    />
                </fieldset>       
            )}
        </TrackerContext.Consumer>
    )
}

function compareContacts(a, b) {
    if (a.name > b.name) {
        return -1
    } else if (b.name > a.name) {
        return 1
    } else {
        return 0
    }
}