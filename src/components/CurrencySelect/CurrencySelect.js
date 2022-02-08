import React from 'react'
import './CurrencySelect.css'

export default function CurrencySelect({value, onChange, disabled}) {
    return (
        <div className='currency-select'>
            <div className='currency-select_wrapper'>
                <select
                    className='currency-select__select'
                    name='currency' 
                    type='text'
                    placeholder='выберете валюту покупки'
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                >
                    <option className='currency-select__option' value='' selected disabled hidden></option>
                    <option value='rub'>₽ Рубли</option>
                    <option value='usd'>$ Доллары</option>
                    <option value='eur'>€ Евро</option>
                </select>
            </div>            
        </div>
    )
}
