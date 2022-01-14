import React from 'react'
import './AmountInput.css'

export default function AmountInput({value, onChange, disabled}) {
    return (
        <div className='wrapper__amount-input'>
            <h2 className='amount-input__title'>Сумма покупки</h2>
            <input
                className='amount-input__input' 
                autoComplete='off'             
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}
