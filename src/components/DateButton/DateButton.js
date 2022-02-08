import React from 'react'
import './DateButton.css'

function DateButton({onClick}) {

    return (
        <div className='date-button'>
            <button className='date-button__button' onClick={onClick}>сегодня</button>
        </div>
    )
}

export default DateButton