import React from 'react'
import './CurrencyInput.css'

export default function CurrencyInput({value, onChange, disabled}) {
    return (
        <div className='wrapper__currency-input'>
            <h2 className='currency-input__title'>Валюта покупки</h2>
            <select
                className='currency-input__select'
                name='currency' 
                type='text'
                placeholder='выберете валюту покупки'
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                <option className='currency-input__option' value='' selected disabled hidden></option>
                <option value='rub'>Рубли</option>
                <option value='usd'>Доллары</option>
                <option value='eur'>Евро</option>
            </select>            
        </div>
    )
}
