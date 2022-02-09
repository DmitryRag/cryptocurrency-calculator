import React from 'react'
import './DateButton.css'

function DateButton({onClick, disabled}) {

    return (
        <div className='date-button'>
            <button 
                className='date-button__button' 
                onClick={onClick} 
                disabled={disabled}
            >
                сегодня
            </button>
        </div>
    )
}

export default DateButton