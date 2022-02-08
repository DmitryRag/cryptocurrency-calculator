import React from 'react'
import {today} from '../../date'
import './DateInput.css'


export default function DateInput({valueDay, valueMonth, valueYear, onChangeDay, onChangeMonth, onChangeYear, onClick, label, title, showBtnDate, errBuyFirst, errBuyFirstMessage, errBuySecond, errSellFirst, errSellSecond, onBlur, disabled, disabledBtn}) {

    return (
        <div className='wrapper__date-input'>
            <h2 className='date-input__title'>{title}</h2>
            <div className='date-input__inputs'>
                <input 
                    className='date-input__dd'
                    value={valueDay} 
                    placeholder='DD'
                    onChange={onChangeDay}
                    maxLength={2}
                    disabled={disabled}
                    type='number'
                />
                <input
                    className='date-input__mm'
                    value={valueMonth}
                    placeholder='MM'
                    onChange={onChangeMonth}
                    maxLength={2}
                    disabled={disabled}
                    type='number'
                />
                <input 
                    className='date-input__yyyy'
                    value={valueYear} 
                    placeholder='YYYY'
                    onChange={onChangeYear}
                    maxLength={4}
                    onBlur={onBlur}
                    disabled={disabled}
                    type='number'
                />
                {showBtnDate?
                <button 
                    className='date-input__btn'
                    onClick={onClick}
                    disabled={disabledBtn}
                >{label}</button>
                :null}
            </div>
            {errBuyFirst && <span className='date-input__error'>выберете дату не ранее {errBuyFirstMessage}</span>}
            {errBuySecond && <span className='date-input__error'>выберете дату не позднее сегодня {today}</span>}
            {errSellFirst && <span className='date-input__error'>дата продажи не может быть меньше или равна дате покупки</span>}
            {errSellSecond && <span className='date-input__error'>дата продажи не может быть больше {today}</span>}
        </div>
    )
}
