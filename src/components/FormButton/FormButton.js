import React from 'react'
import './FormButton.css'

function FormButton({onClick, buttonLabel}) {
    return (
        <div className='form-button'>
            <button 
                className='form-button__button'
                type='submit'
                onClick={onClick}
            >
                {buttonLabel}
            </button>
        </div>
    )
}

export default FormButton
