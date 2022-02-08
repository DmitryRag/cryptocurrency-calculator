import React from 'react'
import MonthSelect from '../MonthSelect/MonthSelect'
import YearSelect from '../YearSelect/YearSelect'
import DaySelect from '../DaySelect/DaySelect'
import DateButton from '../DateButton/DateButton'
import './DateBlock.css'

function DateBlock({ valueYear, onChangeYear, valueMonth, onChangeMonth, valueDay, onChangeDay, onClick, label, showBtn, daysArray, errBuyFirst, errBuySecond, errSellFirst, errSellSecond, onBlur, today, errorBuyDay }) {

    return (
        <div className='date-block'>
            <h2 className='date-block__title'>{label}:</h2>
            <div 
                className='date-block__dates'
                onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        onBlur()
                    }
                }}
            >
                <YearSelect
                    value={valueYear}
                    onChange={onChangeYear}
                />
                <MonthSelect
                    value={valueMonth}
                    onChange={onChangeMonth}
                />
                <DaySelect
                    value={valueDay}
                    onChange={onChangeDay}
                    daysArray={daysArray}
                />
                {showBtn ?
                    <DateButton
                        onClick={onClick}
                    />
                    : null}
            </div>
            {errBuyFirst && <span className='date_error'>выберете дату не ранее {errorBuyDay}</span>}
            {errBuySecond && <span className='date_error'>выберете дату не позднее сегодня {today}</span>}
            {errSellFirst && <span className='date_error'>дата продажи не может быть меньше или ровна дате покупки</span>}
            {errSellSecond && <span className='date_error'>дата продажи не может быть больше {today}</span>}
        </div>
    )
}

export default DateBlock