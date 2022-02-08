import React from 'react'
import './MonthSelect.css'

function MonthSelect({value, onChange}) {

    return (
        <div className='month-select'>
            <div className='month-select_wrapper'>
                <select
                    className='month-select__select'
                    type='text'
                    value={value}
                    onChange={onChange}
                >
                    <option className='month-select__option' value='' selected disabled hidden>month</option>
                    <option value='01'>Январь</option>
                    <option value='02'>Февраль</option>
                    <option value='03'>Март</option>
                    <option value='04'>Апрель</option>
                    <option value='05'>Май</option>
                    <option value='06'>Июнь</option>
                    <option value='07'>Июль</option>
                    <option value='08'>Август</option>
                    <option value='09'>Сентябрь</option>
                    <option value='10'>Октябрь</option>
                    <option value='11'>Ноябрь</option>
                    <option value='12'>Декабрь</option>
                </select>
            </div>
        </div>
    )
}

export default MonthSelect
