import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ searchTerm, updateSearchTerm }) => (
                <div className='searchDiv'>
                    <input 
                        type='text' 
                        name='searchTargets' 
                        placeholder='Search targets'
                        value={searchTerm}
                        onChange={({ target: { value } }) => updateSearchTerm(value)}
                    />
                    <button
                        className='clearSearch'
                        onClick={() => updateSearchTerm('')}
                    >
                        Clear
                    </button>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}