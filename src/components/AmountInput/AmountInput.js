import React from 'react'
import './AmountInput.css'

export default function AmountInput({value, onChange, disabled, prefix}) {
    return (
        <div className='amount-input'>
            <h2 className='amount-input__title'>На сумму:</h2>
            <div className='amount-input_wrapper'>
                <p className='amount-input__prefix'>{prefix}</p>
                <input
                    className='amount-input__input' 
                    autoComplete='off'             
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    type='number'
                />
            </div>
        </div>
    )
}
