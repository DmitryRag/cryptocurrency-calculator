import './Total.css'

export default function Total({amountprice, prefix, percent, onClick}) {
    return (
        <div className='wrapper__total'>
            <p className='total__calculate'>Сейчас было бы: {amountprice}{prefix}</p>
            <p className='total__percent'>Рост на: {Math.round(percent)}%</p>
            <button
                className='btn__reset' 
                onClick={onClick}  
            >Обнулить все</button>
        </div>
    )
}
