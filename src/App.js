import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {today, currDay, currMonth, currYear} from '../src/date'
import NameInput from './components/NameInput/NameInput'
import DateInput from './components/DateInput/DateInput'
import CurrencyInput from './components/CurrencyInput/CurrencyInput'
import AmountInput from './components/AmountInput/AmountInput'
import Total from './components/Total/Total'
import './App.css'

function App() {
    // название крипты
    const [coinName, setCoinName] = useState('')
    // даты покупки
    const [buyDay, setBuyDay] = useState('')
    const [buyMonth, setBuyMonth] = useState('')
    const [buyYear, setBuyYear] = useState('')
    // даты продажи
    const [sellDay, setSellDay] = useState('')
    const [sellMonth, setSellMonth] = useState('')
    const [sellYear, setSellYear] = useState('')
    // цены покупки
    const [coinBuyRub, setCoinBuyRub] = useState(0)
    const [coinBuyUsd, setCoinBuyUsd] = useState(0) 
    const [coinBuyEur, setCoinBuyEur] = useState(0)
    // цены продажи 
    const [coinSellRub, setCoinSellRub] = useState(0) 
    const [coinSellUsd, setCoinSellUsd] = useState(0)
    const [coinSellEur, setCoinSellEur] = useState(0)
     // выбор валюты
    const [currencyChoice, setCurrencyChoice] = useState('')
    // сумма покупки
    const [moneyBuy, setMoneyBuy] = useState('')
     // эмблемка валюты
    const [prefix, setPrefix] = useState('')
    // профит денег
    const [profit, setProfit] = useState(0)
    const [percent, setPercent] = useState(0)
    // показать блок подсчета выбранной валюты
    const [showProfit, setShowProfite] = useState(false) 
    // всплытие ошибок дат
    const [errBuyFirst, setErrBuyFirst] = useState(false) // валидность от запроса цены покупки
    const [errBuySecond, setErrBuySecond] = useState(false) // валидность от запроса цены покупки
    const [errSellFirst, setErrSellFirst] = useState(false) // валидность от запроса цены покупки
    const [errSellSecond, setErrSellSecond] = useState(false) // валидность от запроса цены покупки
    // дизейбл инпутов
    const [dateBuyValidity, setDateBuyValidity] = useState(false)
    const [dateSellValidity, setDateSellValidity] = useState(false)
    const [currencyChoiceValidity, setCurrencyChoiceValidity] = useState(false)
    const [btnCalculateDisabled, setBtnCalculateDisabled] = useState(true)
    // 
    const [btnCalculateLabel, setBtnCalculateLabel] = useState('Посчитать')

    // переменные
    var cryptocurrency = coinName.toLowerCase().replace( /\s/g, '-')
    var dateBuy = buyDay + '-' + buyMonth + '-' + buyYear
    var dateSell = sellDay + '-' + sellMonth + '-' + sellYear
    var amountprice 
    if (profit <= 10) {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(2))
    } else {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(0))
    }
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

    // запрос цены покупки
    const getBuyPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateBuy}`)
        .then(res => {
            setCoinBuyRub(res.data.market_data.current_price.rub)
            setCoinBuyUsd(res.data.market_data.current_price.usd)
            setCoinBuyEur(res.data.market_data.current_price.eur)
        })
        .catch(error => {
            console.log(error, 'ошибка даты покупки')
        })
    }
    // запрос цены продажи
    const getSellPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateSell}`)
        .then(res => {
            setCoinSellRub(res.data.market_data.current_price.rub)
            setCoinSellUsd(res.data.market_data.current_price.usd)
            setCoinSellEur(res.data.market_data.current_price.eur)
        })
        .catch(error => console.log(error, 'ошибка даты продажи'))
    }

    useEffect(() => {
        getBuyPrice()
    }, [dateBuy, coinName])

    useEffect(() => {
        getSellPrice()
    }, [dateSell, coinName])

    // изменение название крипты
    function handleChangeCoinName(e) {
        setCoinName(e.target.value)
    }

    // изменение даты покупки
    function handleChangeBuyDay(e) {
        setBuyDay(e.target.value)
    }
    function handleChangeBuyMonth(e) {
        setBuyMonth(e.target.value)
    }
    function handleChangeBuyYear(e) {
        setBuyYear(e.target.value)
    }
    // блюр даты покупки
    function blurDateBuy() {
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
            setErrBuyFirst(true)
            setErrBuySecond(false)
            setDateBuyValidity(false)
        } else if (firstDate > thirdDate) {
            setErrBuySecond(true)
            setErrBuyFirst(false)
            setDateBuyValidity(false)
        } else {
            setErrBuyFirst(false)
            setErrBuySecond(false)
            setDateBuyValidity(true)
        }
    }

    // изменение даты продажи
    function handleChangeSellDay(e) {
        setSellDay(e.target.value)
    }
    function handleChangeSellMonth(e) {
        setSellMonth(e.target.value)
    }
    function handleChangeSellYear(e) {
        setSellYear(e.target.value)
    }
    // блюр даты продажи
    function blurDateSell() {
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
            setErrSellFirst(true)
            setErrSellSecond(false)
            setDateSellValidity(false)
        } else if (secondDate > thirdDate) {
            setErrSellSecond(true)
            setErrSellFirst(false)
            setDateSellValidity(false)
        } else {
            setErrSellFirst(false)
            setErrSellSecond(false)
            setDateSellValidity(true)
        }
    }
    // кнопка даты продажи сегодня
    function handleDateSell(e) {
        e.preventDefault()
        setSellDay(currDay)
        setSellMonth(currMonth)
        setSellYear(currYear)
        setErrSellFirst(false)
        setErrSellSecond(false)
        setDateSellValidity(true)
    }
    // изменение валюты покупки
    function handleCurrencyChoice(e) {
        e.preventDefault()
        setCurrencyChoice(e.target.value)
        setCurrencyChoiceValidity(true)
    }
    // изменение суммы покупки
    function handleMoneyBuy(e) {
        setMoneyBuy(e.target.value)
        setBtnCalculateDisabled(false)
    }
    // подсчет формы
    function handleCalculate(e) {
        e.preventDefault()
        var money = Number(moneyBuy.replace(/[^0-9]/g,""))
        if (currencyChoice === 'usd') {
            setProfit((money / coinBuyUsd) * coinSellUsd)
            setPercent((coinSellUsd - coinBuyUsd) /  coinBuyUsd * 100)
            setPrefix('$')
        } else if (currencyChoice === 'eur') {
            setProfit((money / coinBuyEur) * coinSellEur)
            setPercent((coinSellEur - coinBuyEur) /  coinBuyEur * 100)
            setPrefix('€')
        } else {
            setProfit((money / coinBuyRub) * coinSellRub)
            setPercent((coinSellRub - coinBuyRub) /  coinBuyRub * 100)
            setPrefix('₽')
        }
        setBtnCalculateLabel('Пересчитать')
        setShowProfite(true)
    }
    // обнуление формы
    function handleReset(e) {
        e.preventDefault()

        setCoinName('')
        setBuyDay('')
        setBuyMonth('')
        setBuyYear('')
        setSellDay('')
        setSellMonth('')
        setSellYear('')
        setCoinBuyRub(0)
        setCoinBuyUsd(0)
        setCoinBuyEur(0)
        setCoinSellRub(0)
        setCoinSellUsd(0)
        setCoinSellEur(0)
        setCurrencyChoice('')
        setMoneyBuy('')
        setPrefix('')
        setProfit(0)
        setPercent(0)
        setShowProfite(false)
        setErrBuyFirst(false)
        setErrBuySecond(false)
        setErrSellFirst(false)
        setErrSellSecond(false)
        setDateBuyValidity(false)
        setDateSellValidity(false)
        setCurrencyChoiceValidity(false)
        setBtnCalculateDisabled(true)
        setBtnCalculateLabel('Посчитать')
    }

    return (
        <div className='wrapper'>
            <h1>Crypto Calculator</h1>
            <form className='form'>
                <NameInput
                    value={coinName}
                    onChange={handleChangeCoinName}
                />
                <DateInput
                    valueDay={buyDay}
                    valueMonth={buyMonth}
                    valueYear={buyYear}
                    onChangeDay={handleChangeBuyDay}
                    onChangeMonth={handleChangeBuyMonth}
                    onChangeYear={handleChangeBuyYear}
                    title={'Дата покупки'}
                    errBuyFirst={errBuyFirst}
                    errBuyFirstMessage={buyday}
                    errBuySecond={errBuySecond}
                    onBlur={blurDateBuy}
                    disabled={!coinName}
                />
                <DateInput
                    valueDay={sellDay}
                    valueMonth={sellMonth}
                    valueYear={sellYear}
                    onChangeDay={handleChangeSellDay}
                    onChangeMonth={handleChangeSellMonth}
                    onChangeYear={handleChangeSellYear}
                    showBtnDate={true}
                    onClick={handleDateSell}
                    label={'сегодня'}
                    title={'Дата продажи'}
                    errSellFirst={errSellFirst}
                    errSellSecond={errSellSecond}
                    onBlur={blurDateSell}
                    disabled={!dateBuyValidity}
                    disabledBtn={!dateBuyValidity}
                />
                <CurrencyInput
                    value={currencyChoice}
                    onChange={handleCurrencyChoice}
                    disabled={!dateSellValidity}
                />
                <AmountInput
                    value={moneyBuy}
                    onChange={handleMoneyBuy}
                    disabled={!currencyChoiceValidity}
                />
                <button 
                    className='btn__calculate'
                    onClick={handleCalculate}
                    disabled={btnCalculateDisabled}
                >{btnCalculateLabel}</button>
            </form>
            {showProfit? 
                <Total
                amountprice={amountprice}
                prefix={prefix}
                percent={percent}
                onClick={handleReset}
                />
            :null}
        </div>   
    )
}

export default App