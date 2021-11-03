import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import axios from 'axios'
import { today } from '../src/date'
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

    const [moneyBuy, setMoneyBuy] = useState('') // сумма покупки
    const [profit, setProfit] = useState(0) // профит денег
    const [prefix, setPrefix] = useState('')

    const [currencyChoice, setCurrencyChoice] = useState('') // выбор валюты
    const [showProfit, setShowProfite] = useState(false) // показать блок подсчета выбранной валюты

    const [coinNameValidity, setCoinNameValidity] = useState(false) // выбор крипты
    const [dateBuyValidity, setDateBuyValidity] = useState(false) // дата покупки
    const [dateSellValidity, setDateSellValidity] = useState(false) // дата продажи
    const [currencyChoiceValidity, setCurrencyChoiceValidity] = useState(false)
    const [moneyBuyValidity, setMoneyBuyValidity] = useState(false) // сумма покупки
    const [dateBuyValid, setDateBuyValid] = useState(true) // валидность от запроса цены покупки
    const [errorDateBuy, setErrorDateBuy] = useState(0) // такой даты покупки нету в бд
    const [errorDateSell, setErrorDateSell] = useState(true) // дата покупки больше даты продажи

    const isDisabledButtonBuy = !coinNameValidity // валидность для кнопки даты покупки
    const isDisabledButtonSell = !coinNameValidity || !dateBuyValidity // валидность для кнопки даты продажи
    const isDisabledButtonTotal = !coinNameValidity || !dateBuyValidity || !dateSellValidity || !moneyBuyValidity // профит кнопка

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

    const getBuyPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateBuy}`)
        .then(res => {
            setCoinBuyRub(res.data.market_data.current_price.rub)
            setCoinBuyUsd(res.data.market_data.current_price.usd)
            setCoinBuyEur(res.data.market_data.current_price.eur)
        })
        .catch(error => {
            setErrorDateBuy(0.0000001)
        })
    }

    const getSellPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateSell}`)
        .then(res => {
            setCoinSellRub(res.data.market_data.current_price.rub)
            setCoinSellUsd(res.data.market_data.current_price.usd)
            setCoinSellEur(res.data.market_data.current_price.eur)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getBuyPrice()
    }, [dateBuy, coinName])

    useEffect(() => {
        getSellPrice()
    }, [coinName])

    useEffect(() => {
        getSellPrice()
        if (errorDateBuy > coinBuyRub) {
            setDateBuyValid(false)
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
        setDateSell(e.target.value)
        setDateSellValidity(e.target.validity.valid)
    }

    function handleDateBuy(e) {
        e.preventDefault()
        setDateBuyValidity(e.target.validity.valid)
        setDateBuy(buyday)
    }

    function handleDateSell(e) {
        e.preventDefault()
        setDateSellValidity(e.target.validity.valid)
        setDateSell(today)
    }

    function handleCurrencyChoice(e) {
        e.preventDefault()
        setCurrencyChoice(e.target.value)

        var firstValue = dateBuy.split('-')
        var secondValue = dateSell.split('-')
        var firstDate=new Date()
        var secondDate=new Date()
        firstDate.setFullYear(firstValue[0],(firstValue[1] - 1 ),firstValue[2])
        secondDate.setFullYear(secondValue[0],(secondValue[1] - 1 ),secondValue[2])

        if (firstDate > secondDate)
        {
            setCurrencyChoice('')
            setCurrencyChoiceValidity(e.target.validity.unvalid)
            setDateSellValidity(false)
            setErrorDateSell(false)
        } else {
            setErrorDateSell(true)
            setCurrencyChoiceValidity(e.target.validity.valid)
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

    var amountprice
    if (profit <= 10) {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(2))
    } else {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(0))
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
        setDateBuyValid(true)
        setErrorDateSell(true)
    }

    return (
        <div className='container'>
            <h1>Crypto Calculator</h1>
            <form className='calculator__container'>
                <div className='calculator__field'>
                    <select
                        className={`cruptocurrency__name  ${isDisabledButtonBuy ? 'disabled' : 'valid'}`}
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
                        className={`cruptocurrency__input ${isDisabledButtonBuy ? 'disabled' : 'valid'}`}
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
                    <button 
                        className={`btn__calculator ${isDisabledButtonBuy ? 'btn_disabled' : ''}`}
                        onClick={handleDateBuy}
                        disabled={!coinName}
                    >первый день</button>
                </div>
                {!dateBuyValid && <span className='error__date-buy'>такой даты нету в базе, нажмите кнопку "обнулить все" и воспользуйтесь кнопкой "первый день"</span>}
                <div className='calculator__field-date'>
                    <NumberFormat 
                        className={`cruptocurrency__input ${isDisabledButtonSell ? 'disabled' : 'valid'}`}
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
                        className={`btn__calculator ${isDisabledButtonSell ? 'btn_disabled' : ''}`}
                        disabled={isDisabledButtonSell}
                        onClick={handleDateSell}
                    >сегодня</button>
                </div>
                {!errorDateSell && <span className='error__date-buy'>дата продажи не может быть раньше, чем дата покупки</span>}
                <div className='calculator__field'>
                    <select
                        className={`cruptocurrency__currency-name  ${isDisabledButtonSell ? 'disabled' : 'valid'}`}
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
                        className={`cruptocurrency__input ${!currencyChoiceValidity ? 'disabled' : 'valid'}`}
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
                    className={`btn__calculator btn__calculator_big ${isDisabledButtonTotal ? 'btn_disabled' : ''}`}
                    onClick={handleProfit}
                    disabled={isDisabledButtonTotal}
                >посчитать</button>
                <button
                    className={`btn__calculator btn__calculator_big ${!coinName ? 'btn_disabled' : ''}`}
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