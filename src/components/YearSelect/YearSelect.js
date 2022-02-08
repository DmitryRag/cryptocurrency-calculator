import React from 'react'
import './YearSelect.css'

function YearSelect({value, onChange}) {

    return (
        <div className='year-select'>
            <div className='year-select_wrapper'>
                <select
                    className='year-select__select'
                    type='text'
                    placeholder='выберете месяц'
                    value={value}
                    onChange={onChange}
                >
                    <option className='year-select__option' value='' selected disabled hidden>year</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                </select>
            </div>
        </div>
    )
}

export default YearSelect