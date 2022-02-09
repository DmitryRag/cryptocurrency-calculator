import React from 'react'
import './FormButton.css'

function FormButton({onClick, buttonLabel, disabled}) {
    return (
        <div className='form-button'>
            <button 
                className='form-button__button'
                type='submit'
                onClick={onClick}
                disabled={disabled}
            >
                {buttonLabel}
            </button>
        </div>
    )
}

export default FormButton
