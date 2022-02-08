import React from 'react'
import NameSelect from '../NameSelect/NameSelect'
import './NameBlock.css'

function NameBlock({value, onChange}) {

    return (
        <div className='name-block'>
            <h2 className='name-block__title'>Криптовалюта:</h2>
            <NameSelect 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default NameBlock