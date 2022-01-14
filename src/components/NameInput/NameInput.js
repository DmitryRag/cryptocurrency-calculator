import React from 'react'
import './NameInput.css'

export default function NameInput({value, onChange}) {

    return (
        <div className='wrapper__name-input'>
            <h2 className='name-input__title'>Криптовалюта</h2>
            <select
                className='name-input__select'
                name='coinname' 
                type='text'
                placeholder='выберете криптовалюту'
                value={value}
                onChange={onChange}
            >
                <option className='name-input__option' value='' selected disabled hidden></option>
                <option value='bitcoin'>Bitcoin</option>
                <option value='ethereum'>Ethereum</option>
                <option value='dogecoin'>Dogecoin</option>
                <option value='ripple'>Ripple</option>
                <option value='tether'>Tether</option>
            </select>
        </div>       
    )
}
