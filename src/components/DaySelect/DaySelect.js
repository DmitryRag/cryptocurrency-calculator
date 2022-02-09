import React from 'react'
import './DaySelect.css'

function DaySelect({ value, onChange, daysArray, disabled }) {

    return (
        <div className='day-select'>
            <div className='day-select_wrapper'>
                <select
                    className='day-select__select'
                    type='text'
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                >
                    <option className='day-select__option' value='' selected disabled hidden>день</option>
                    {daysArray.map(daysArray => <option value={daysArray}>{daysArray}</option>)}
                </select>
            </div>
        </div>
    )
}

export default DaySelect