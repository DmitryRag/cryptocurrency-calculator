import React from 'react'
import classNames from 'classnames'
import './AmountInput.css'

export default function AmountInput({value, onChange, disabled, prefix}) {
    const wrapperClass = classNames(
        'amountinput_wrapper', {
            amountinput_wrapper_disabled: disabled
        }
    )

    return (
        <div className='amount-input'>
            <h2 className='amount-input__title'>На сумму:</h2>
            <div className={wrapperClass}>
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
