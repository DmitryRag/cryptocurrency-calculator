import React from 'react'
import './NameSelect.css'

export default function NameSelect({value, onChange}) {

    return (
        <div className='name-select'>
            <div className='name-select_wrapper'>
                <select
                    className='name-select__select'
                    name='coinname' 
                    type='text'
                    placeholder='выберете криптовалюту'
                    value={value}
                    onChange={onChange}
                >
                    <option className='name-select__option' value='' selected disabled hidden></option>
                    <option value='bitcoin'>Bitcoin</option>
                    <option value='ethereum'>Ethereum</option>
                    <option value='dogecoin'>Dogecoin</option>
                    <option value='ripple'>Ripple</option>
                    <option value='tether'>Tether</option>
                </select>
            </div>
        </div>       
    )
}
