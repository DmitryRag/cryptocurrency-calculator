import React from 'react'
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import './CurrencyBlock.css'

function CurrencyBlock({value, onChange}) {

    return (
        <div className='сurrency-block'>
            <h2 className='сurrency-block__title'>Валюта:</h2>
            <CurrencySelect 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default CurrencyBlock