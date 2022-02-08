import './Total.css'

export default function Total({amountprice, prefix, percent, coins, onClick}) {
    var amouncoins 
    if (coins < 1) {
        amouncoins = coins.toFixed(8)
    } else {
        amouncoins = coins.toFixed(4)
    }

    return (
        <div className='total'>
            <div className='total__info'>
                <p className='total__calculate'>Сейчас было бы {amountprice}{prefix}</p>
                <p>Это {amouncoins} монет</p>
                <p className='total__percent'>Рост на {Math.round(percent)}%</p>
            </div>
            <button
                className='btn__reset' 
                onClick={onClick}  
            >Обнулить все</button>
        </div>
    )
}
