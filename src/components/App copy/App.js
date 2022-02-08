import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {today, currDay, currMonth, currYear, requestDate, beforeDate} from '../../date'
import NameInput from '../NameInput/NameInput'
import DateInput from '../DateInput/DateInput'
import CurrencyInput from '../CurrencyInput/CurrencyInput'
import AmountInput from '../AmountInput/AmountInput'
import Total from '../Total/Total'
import './App.css'

import useInput from '../../hooks/useInput'

function App() {
    const [buyPrice, setBuyPrice] = useState({
        rub: 0,
        usd: 0,
        eur: 0
    }) // цена покупки
    const [sellPrice, setSellPrice] = useState({
        rub: 0,
        usd: 0,
        eur: 0
    }) // цена продажи 
    const [currencyChoice, setCurrencyChoice] = useState('') // выбор валюты
    const [moneyBuy, setMoneyBuy] = useState('') // сумма покупки
    const [prefix, setPrefix] = useState('') // эмблемка валюты
    const [profit, setProfit] = useState(0) // профит денег
    const [percent, setPercent] = useState(0)
    const [showProfit, setShowProfite] = useState(false) // показать блок итога 
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

    const coinName = useInput('')
    const buyDay = useInput('')
    const buyMonth = useInput('')
    const buyYear = useInput('')
    const sellDay = useInput('')
    const sellMonth = useInput('')
    const sellYear = useInput('')

    var cryptocurrency = coinName.value.toLowerCase().replace( /\s/g, '-')

    var dateBuy = requestDate(buyDay.value, buyMonth.value, buyYear.value) 
    var dateSell = requestDate(sellDay.value, sellMonth.value, sellYear.value)
    const earlyDate = beforeDate(coinName.value)
    var amountprice 
    if (profit <= 10) {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(2))
    } else {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(0))
    }



    console.log(dateBuy)

    const getBuyPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateBuy}`)
        .then(res => {
            setBuyPrice({
                ...setBuyPrice, rub: res.data.market_data.current_price.rub,
                ...setBuyPrice, usd: res.data.market_data.current_price.usd,
                ...setBuyPrice, eur: res.data.market_data.current_price.eur
            })
        })
        .catch(error => {
            console.log(error, 'ошибка даты покупки')
        })
    } // запрос цены покупки

    const getSellPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateSell}`)
        .then(res => {
            setSellPrice({
                ...setSellPrice, rub: res.data.market_data.current_price.rub,
                ...setSellPrice, usd: res.data.market_data.current_price.usd,
                ...setSellPrice, eur: res.data.market_data.current_price.eur
            })
        })
        .catch(error => console.log(error, 'ошибка даты продажи'))
    } // запрос цены продажи

    useEffect(() => {
        getBuyPrice()
    }, [dateBuy, coinName.value])

    useEffect(() => {
        getSellPrice()
    }, [dateSell, coinName.value])


    
    function blurDateBuy() {
        var firstValue = dateBuy.split('-')
        var secondValue = earlyDate.split('-')
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
    } // блюр даты покупки

    
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
    } // блюр даты продажи
    
    function handleDateSell(e) {
        e.preventDefault()
        sellDay.todayDate(currDay)
        sellMonth.todayDate(currMonth)
        sellYear.todayDate(currYear)
        setErrSellFirst(false)
        setErrSellSecond(false)
        setDateSellValidity(true)
    } // кнопка даты продажи сегодня
    
    function handleCurrencyChoice(e) {
        e.preventDefault()
        setCurrencyChoice(e.target.value)
        setCurrencyChoiceValidity(true)
    } // изменение валюты покупки
    
    function handleMoneyBuy(e) {
        setMoneyBuy(e.target.value)
        setBtnCalculateDisabled(false)
    } // изменение суммы покупки
    
    function handleCalculate(e) {
        e.preventDefault()
        var money = Number(moneyBuy.replace(/[^0-9]/g,""))
        if (currencyChoice === 'usd') {
            setProfit((money / buyPrice.usd) * sellPrice.usd)
            setPercent((sellPrice.usd - buyPrice.usd) /  buyPrice.usd * 100)
            setPrefix('$')
        } else if (currencyChoice === 'eur') {
            setProfit((money / buyPrice.eur) * sellPrice.eur)
            setPercent((sellPrice.eur - buyPrice.eur) /  buyPrice.eur * 100)
            setPrefix('€')
        } else {
            setProfit((money / buyPrice.rub) * sellPrice.rub)
            setPercent((sellPrice.rub - buyPrice.rub) /  buyPrice.rub * 100)
            setPrefix('₽')
        }
        setBtnCalculateLabel('Пересчитать')
        setShowProfite(true)
    } // подсчет формы

    function handleReset(e) {
        e.preventDefault()
        buyDay.resetValue()
        buyMonth.resetValue()
        buyYear.resetValue()
        coinName.resetValue()
        sellDay.resetValue()
        sellMonth.resetValue()
        sellYear.resetValue()
        setBuyPrice({
            ...setBuyPrice, buyRub: 0,
            ...setBuyPrice, buyUsd: 0,
            ...setBuyPrice, buyEur: 0
        })
        setSellPrice({
            ...setSellPrice, sellRub: 0,
            ...setSellPrice, sellUsd: 0,
            ...setSellPrice, sellEur: 0
        })
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
    } // обнуление формы

    return (
        <div className='wrapper'>
            <h1>Crypto Calculator</h1>
            <form className='form'>
                <NameInput
                    value={coinName.value}
                    onChange={coinName.onChange}
                />
                <DateInput
                    valueDay={buyDay.value}
                    valueMonth={buyMonth.value}
                    valueYear={buyYear.value}
                    onChangeDay={buyDay.onChange}
                    onChangeMonth={buyMonth.onChange}
                    onChangeYear={buyYear.onChange}

                    title={'Дата покупки'}
                    errBuyFirst={errBuyFirst}
                    errBuyFirstMessage={earlyDate}
                    errBuySecond={errBuySecond}
                    onBlur={blurDateBuy}
                    disabled={!coinName.value}
                />
                <DateInput
                    valueDay={sellDay.value}
                    valueMonth={sellMonth.value}
                    valueYear={sellYear.value}
                    onChangeDay={sellDay.onChange}
                    onChangeMonth={sellMonth.onChange}
                    onChangeYear={sellYear.onChange}
                    
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