import React, {useState, useEffect} from 'react'
import NumberFormat from 'react-number-format'
import axios from 'axios'
import {today} from '../src/date'
import './App.css'

function App() {
    const [coinName, setCoinName] = useState('') // название крипты
    const [dateBuy, setDateBuy] = useState('') // дата покупки
    const [dateSell, setDateSell] = useState('') // дата продажи
    const [coinBuyRub, setCoinBuyRub] = useState(0) // цена покупки
    const [coinBuyUsd, setCoinBuyUsd] = useState(0) 
    const [coinBuyEur, setCoinBuyEur] = useState(0) 
    const [coinSellRub, setCoinSellRub] = useState(0) // цена продажи
    const [coinSellUsd, setCoinSellUsd] = useState(0)
    const [coinSellEur, setCoinSellEur] = useState(0)
    const [currencyChoice, setCurrencyChoice] = useState('') // выбор валюты
    const [prefix, setPrefix] = useState('') // эмблемка валюты
    const [moneyBuy, setMoneyBuy] = useState('') // сумма покупки
    const [profit, setProfit] = useState(0) // профит денег
    const [showProfit, setShowProfite] = useState(false) // показать блок подсчета выбранной валюты

    const [coinNameValidity, setCoinNameValidity] = useState(false) // валидность выбора крипты
    const [dateBuyValidity, setDateBuyValidity] = useState(false) // дата покупки
    const [dateSellValidity, setDateSellValidity] = useState(false) // дата продажи
    const [currencyChoiceValidity, setCurrencyChoiceValidity] = useState(false)
    const [moneyBuyValidity, setMoneyBuyValidity] = useState(false) // сумма покупки

    const [errBuyFirst, setErrBuyFirst] = useState(true) // валидность от запроса цены покупки
    const [errBuySecond, setErrBuySecond] = useState(true) // валидность от запроса цены покупки
    const [errSellFirst, setErrSellFirst] = useState(true) // валидность от запроса цены покупки
    const [errSellSecond, setErrSellSecond] = useState(true) // валидность от запроса цены покупки
    const [errorDateBuy, setErrorDateBuy] = useState(0) // такой даты покупки нету в бд

    const disabledButtonTotal = !coinNameValidity || !dateBuyValidity || !dateSellValidity || !moneyBuyValidity // профит кнопка

    var cryptocurrency = coinName.toLowerCase().replace( /\s/g, '-')

    var buyday
    if (coinName === 'bitcoin') {
        buyday = '28-04-2013'
    } if (coinName === 'ethereum') {
        buyday = '07-08-2015'
    } if (coinName === 'ripple') {
        buyday = '04-08-2013'
    } if (coinName === 'tether') {
        buyday = '02-03-2015'
    } if (coinName === 'dogecoin') {
        buyday = '15-12-2013'
    }

    var amountprice
    if (profit <= 10) {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(2))
    } else {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(0))
    }

    const getBuyPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateBuy}`)
        .then(res => {
            setCoinBuyRub(res.data.market_data.current_price.rub)
            setCoinBuyUsd(res.data.market_data.current_price.usd)
            setCoinBuyEur(res.data.market_data.current_price.eur)
        })
        .catch(error => {
            setErrorDateBuy(0.0000001)
            console.log('ошибка даты покупки')
        })
    }

    const getSellPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateSell}`)
        .then(res => {
            setCoinSellRub(res.data.market_data.current_price.rub)
            setCoinSellUsd(res.data.market_data.current_price.usd)
            setCoinSellEur(res.data.market_data.current_price.eur)
        })
        .catch(error => console.log('ошибка даты продажи'))
    }

    useEffect(() => {
        getBuyPrice()
    }, [dateBuy, coinName])

    useEffect(() => {
        getSellPrice()
        if (errorDateBuy > coinBuyRub) {
            setErrBuySecond(false)
            setDateBuyValidity(false)
            setDateSell('')
        } else {
            setErrorDateBuy(0)
        }
    }, [dateSell])

    function handleChangeCoinName(e) {
        setCoinName(e.target.value)
        setCoinNameValidity(e.target.validity.valid)
    }

    function handleChangeDateBuy(e) {
        setDateBuy(e.target.value)
        setDateBuyValidity(e.target.validity.valid)
    }
    
    function handleChangeDateSell(e) {
        var firstValue = dateBuy.split('-')
        var secondValue = buyday.split('-')
        var thirdValue = today.split('-')
        var firstDate=new Date()
        var secondDate=new Date()
        var thirdDate=new Date()
        firstDate.setFullYear(firstValue[2],(firstValue[1] - 1 ),firstValue[0])
        secondDate.setFullYear(secondValue[2],(secondValue[1] - 1 ),secondValue[0])
        thirdDate.setFullYear(thirdValue[2],(thirdValue[1] - 1 ),thirdValue[0])
        if (firstDate < secondDate)
        {
            setErrBuyFirst(false)
            setErrBuySecond(true)
            setDateBuyValidity(false)
            setDateSellValidity(e.target.validity.unvalid)
        } else if (firstDate > thirdDate) {
            setErrBuySecond(false)
            setErrBuyFirst(true)
            setDateBuyValidity(false)
            setDateSellValidity(e.target.validity.unvalid)
        } else {
            setDateSell(e.target.value)
            setErrBuyFirst(true)
            setErrBuySecond(true)
            setDateSellValidity(e.target.validity.valid)

        }
    }

    function handleDateSell(e) {
        e.preventDefault()

        var firstValue = dateBuy.split('-')
        var secondValue = buyday.split('-')
        var thirdValue = today.split('-')
        var firstDate=new Date()
        var secondDate=new Date()
        var thirdDate=new Date()
        firstDate.setFullYear(firstValue[2],(firstValue[1] - 1 ),firstValue[0])
        secondDate.setFullYear(secondValue[2],(secondValue[1] - 1 ),secondValue[0])
        thirdDate.setFullYear(thirdValue[2],(thirdValue[1] - 1 ),thirdValue[0])
        if (firstDate < secondDate)
        {
            setErrBuyFirst(false)
            setErrBuySecond(true)
            setDateBuyValidity(false)
            setDateSellValidity(e.target.validity.unvalid)
        } else if (firstDate > thirdDate) {
            setErrBuySecond(false)
            setErrBuyFirst(true)
            setDateBuyValidity(false)
            setDateSellValidity(e.target.validity.unvalid)
        } else {
            setDateSell(today)
            setDateSellValidity(e.target.validity.valid)
            setErrBuyFirst(true)
            setErrBuySecond(true)
        }
    }

    function handleCurrencyChoice(e) {
        e.preventDefault()

        var firstValue = dateBuy.split('-')
        var secondValue = dateSell.split('-')
        var thirdValue = today.split('-')
        var firstDate=new Date()
        var secondDate=new Date()
        var thirdDate=new Date()
        firstDate.setFullYear(firstValue[2],(firstValue[1] - 1 ),firstValue[0])
        secondDate.setFullYear(secondValue[2],(secondValue[1] - 1 ),secondValue[0])
        thirdDate.setFullYear(thirdValue[2],(thirdValue[1] - 1 ),thirdValue[0])
        if (firstDate >= secondDate)
        {
            setCurrencyChoice('')
            setCurrencyChoiceValidity(e.target.validity.unvalid)
            setDateSellValidity(false)
            setErrSellFirst(false)
            setErrSellSecond(true)
        } else if (secondDate > thirdDate) {
            setCurrencyChoice('')
            setCurrencyChoiceValidity(e.target.validity.unvalid)
            setDateSellValidity(false)
            setErrSellSecond(false)
            setErrSellFirst(true)
        } else {
            setCurrencyChoice(e.target.value)
            setCurrencyChoiceValidity(e.target.validity.valid)
            setDateSellValidity(true)
            setErrSellFirst(true)
            setErrSellSecond(true)
        }
    }

    function handleMoneyBuy(e) {
        setMoneyBuy(e.target.value)
        setMoneyBuyValidity(e.target.validity.valid)
        if (currencyChoice === 'usd') {
            setPrefix('$')
        } else if (currencyChoice === 'eur') {
            setPrefix('€')
        } else {
            setPrefix('₽')
        }
    }

    function handleProfit(e) {
        e.preventDefault()

        var money = Number(moneyBuy.replace(/[^0-9]/g,""))
        if (currencyChoice === 'rub') {
            setProfit((money / coinBuyRub) * coinSellRub)
        } else if (currencyChoice === 'usd') {
            setProfit((money / coinBuyUsd) * coinSellUsd)
        } else {
            setProfit((money / coinBuyEur) * coinSellEur)
        }
        setShowProfite(true)
    }

    function resetForm(e) {
        e.preventDefault()
        
        setCoinName('')
        setDateBuy('')
        setDateSell('')
        setCoinBuyRub(0)
        setCoinBuyUsd(0)
        setCoinBuyEur(0)
        setCoinSellRub(0)
        setCoinSellUsd(0)
        setCoinSellEur(0)
        setMoneyBuy('')
        setCurrencyChoice('')
        setShowProfite(false)
        setCoinNameValidity(false)
        setDateBuyValidity(false)
        setDateSellValidity(false)
        setMoneyBuyValidity(false)
        setCurrencyChoiceValidity(false)
        setErrorDateBuy(0)
        setErrBuyFirst(true)
        setErrBuySecond(true)
        setErrSellFirst(true)
        setErrSellSecond(true)
    }

    return (
        <div className='container'>
            <h1>Crypto Calculator</h1>
            <form className='calculator__container'>
                <div className='calculator__field'>
                    <select
                        className='cruptocurrency__name'
                        name='coinname' 
                        type='text'
                        placeholder='выберете криптовалюту'
                        value={coinName}
                        onChange={handleChangeCoinName}
                        required
                    >
                        <option className='cruptocurrency__name-option' value='' selected disabled hidden>выберете криптовалюту</option>
                        <option value='bitcoin'>Bitcoin</option>
                        <option value='ethereum'>Ethereum</option>
                        <option value='dogecoin'>Dogecoin</option>
                        <option value='ripple'>Ripple</option>
                        <option value='tether'>Tether</option>
                    </select>
                </div>
                <div className='calculator__field-date'>
                    <NumberFormat
                        className='cruptocurrency__input'
                        name='buydate'
                        type='text'
                        format='##-##-####'
                        mask={['_', '_', '_', '_', '_', '_', '_', '_']}
                        placeholder='дата покупки'
                        autoComplete='off'
                        value={dateBuy}
                        disabled={!coinName}
                        onChange={handleChangeDateBuy}
                        pattern='(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d'
                    />
                </div>
                {!errBuyFirst && <span className='error__date-buy'>выберете дату не ранее {buyday}</span>}
                {!errBuySecond && <span className='error__date-buy'>выберете дату не позднее сегодня {today}</span>}
                <div className='calculator__field-date'>
                    <NumberFormat 
                        className='cruptocurrency__input'
                        name='selldate'
                        type='text'
                        format='##-##-####'
                        mask={['_', '_', '_', '_', '_', '_', '_', '_']}
                        placeholder='дата продажи'
                        autoComplete='off'
                        value={dateSell}
                        disabled={!dateBuyValidity}
                        onChange={handleChangeDateSell}
                        pattern='(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d'
                    />
                    <button
                        className={`btn__calculator ${!dateBuyValidity ? 'btn_disabled' : ''}`}
                        disabled={!dateBuyValidity}
                        onClick={handleDateSell}
                    >сегодня</button>
                </div>
                {!errSellFirst && <span className='error__date-buy'>дата продажи не может быть меньше или равна дате покупки</span>}
                {!errSellSecond && <span className='error__date-buy'>дата продажи не может быть больше {today}</span>}
                <div className='calculator__field'>
                    <select
                        className='cruptocurrency__currency-name'
                        name='currency' 
                        type='text'
                        placeholder='выберете валюту покупки'
                        value={currencyChoice}
                        disabled={!dateSellValidity}
                        onChange={handleCurrencyChoice}
                        required
                    >
                        <option className='cruptocurrency__name-option' value='' selected disabled hidden>выберете валюту покупки</option>
                        <option value='rub'>Рубли</option>
                        <option value='usd'>Доллары</option>
                        <option value='eur'>Евро</option>
                    </select>
                </div>
                <div className='calculator__field'>
                    <NumberFormat
                        className='cruptocurrency__input'
                        thousandsGroupStyle="thousand"
                        decimalSeparator=""
                        displayType="input"
                        type="text"
                        thousandSeparator={true}
                        prefix={prefix}
                        allowNegative={true} 
                        placeholder='сумма покупки'
                        autoComplete='off'             
                        value={moneyBuy}
                        disabled={!currencyChoiceValidity}
                        onChange={handleMoneyBuy}
                    />
                </div>
                <button
                    className={`btn__calculator_big ${disabledButtonTotal ? 'btn_disabled' : ''}`}
                    onClick={handleProfit}
                    disabled={disabledButtonTotal}
                >посчитать</button>
                <button
                    className={`btn__calculator_big ${!coinName ? 'btn_disabled' : ''}`}
                    onClick={resetForm}
                    disabled={!coinName}
                >обнулить все</button>
                {showProfit? 
                    <div className='calculator__container_rub'>
                        <p className='calculator__total'>Сейчас было бы: {amountprice}{prefix}</p>  
                    </div>
                :null}
            </form>
        </div>   
    )
}

export default App