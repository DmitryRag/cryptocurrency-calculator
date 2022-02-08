import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {currencyChoise, getDaysInMonth, getDayArray, currDay, currMonth, currYear, requestDate, beforeDate, errorBeforeDate, today} from '../../date'
import NameBlock from '../NameBlock/NameBlock'
import CurrencyBlock from '../CurrencyBlock/CurrencyBlock'
import AmountInput from '../AmountInput/AmountInput'
import DateBlock from '../DateBlock/DateBlock'
import Total from '../Total/Total'
import FormButton from '../FormButton/FormButton'
import useInput from '../../hooks/useInput'
import './Content.css'

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
    const [coins, setCoins] = useState('')
    const [profit, setProfit] = useState(0) // профит денег
    const [percent, setPercent] = useState(0)
    const [showProfit, setShowProfite] = useState(false) // показать блок итога 
    const [btnCalculateLabel, setBtnCalculateLabel] = useState('Посчитать')
    const coinName = useInput('')
    const moneyBuy = useInput('')
    const monthBuy = useInput('')
    const yearBuy = useInput('')
    const dayBuy = useInput('')
    var dateBuy = requestDate(dayBuy.value, monthBuy.value, yearBuy.value)
    const monthSell = useInput('')
    const yearSell = useInput('')
    const daySell = useInput('')
    var dateSell = requestDate(daySell.value, monthSell.value, yearSell.value)
    const currency = useInput('')
    var cryptocurrency = coinName.value.toLowerCase().replace( /\s/g, '-')
    var amountprice 
    if (profit <= 10) {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(2))
    } else {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(0))
    }
    const earlyDate = beforeDate(coinName.value)
    const errorBuyDay = errorBeforeDate(coinName.value)
    const daysBuy = getDaysInMonth(yearBuy.value, monthBuy.value)
    const daysSell = getDaysInMonth(yearSell.value, monthSell.value)
    const arrayDaysBuy = getDayArray(daysBuy)
    const arrayDaysSell = getDayArray(daysSell)
    const prefix = currencyChoise(currency.value)

    const [errBuyFirst, setErrBuyFirst] = useState(false)
    const [errBuySecond, setErrBuySecond] = useState(false)
    const [errSellFirst, setErrSellFirst] = useState(false)
    const [errSellSecond, setErrSellSecond] = useState(false)
    const [errSellThird, setErrSellThird] = useState(false)

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
            /* setDateBuyValidity(false) */
        } else if (firstDate > thirdDate) {
            setErrBuySecond(true)
            setErrBuyFirst(false)
            /* setDateBuyValidity(false) */
        } else {
            setErrBuyFirst(false)
            setErrBuySecond(false)
            /* setDateBuyValidity(true) */
        }
    } 

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
            /* setDateSellValidity(false) */
        } else if (secondDate > thirdDate) {
            setErrSellSecond(true)
            setErrSellFirst(false)
            /* setSellPrice({
                ...setSellPrice, rub: 0,
                ...setSellPrice, usd: 0,
                ...setSellPrice, eur: 0
            }) */
            /* setDateSellValidity(false) */
        } else {
            setErrSellFirst(false)
            setErrSellSecond(false)
            /* setDateSellValidity(true) */
        }
    } // блюр даты продажи

    function handleDateSell(e) {
        e.preventDefault()
        
        daySell.todayDate(currDay)
        monthSell.todayDate(currMonth)
        yearSell.todayDate(currYear)
    } // кнопка даты продажи сегодня
    
    function handleCalculate(e) {
        e.preventDefault()
        var money = Number(moneyBuy.value.replace(/[^0-9]/g,""))
        if (currency.value === 'usd') {
            setProfit((money / buyPrice.usd) * sellPrice.usd)
            setCoins(money / buyPrice.usd)
            setPercent((sellPrice.usd - buyPrice.usd) /  buyPrice.usd * 100)
        } else if (currency.value === 'eur') {
            setProfit((money / buyPrice.eur) * sellPrice.eur)
            setCoins(money / buyPrice.eur)
            setPercent((sellPrice.eur - buyPrice.eur) /  buyPrice.eur * 100)
        } else {
            setProfit((money / buyPrice.rub) * sellPrice.rub)
            setCoins(money / buyPrice.rub)
            setPercent((sellPrice.rub - buyPrice.rub) /  buyPrice.rub * 100)
        }
        setBtnCalculateLabel('Пересчитать')
        setShowProfite(true)
    } // подсчет формы

    function handleReset(e) {
        e.preventDefault()

        coinName.resetValue()
        dayBuy.resetValue()
        monthBuy.resetValue()
        yearBuy.resetValue()
        daySell.resetValue()
        monthSell.resetValue()
        yearSell.resetValue()
        currency.resetValue()
        moneyBuy.resetValue()
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
        setProfit(0)
        setPercent(0)
        setShowProfite(false)
        setBtnCalculateLabel('Посчитать')
    } // обнуление формы

    return (
        <div className='wrapper'>
            <h1>Crypto Calculator</h1>
            <form className='form'>
                <NameBlock
                    value={coinName.value}
                    onChange={coinName.onChange}
                />
                <DateBlock
                    label={'Дата покупки'} 
                    valueYear={yearBuy.value}
                    valueMonth={monthBuy.value}
                    valueDay={dayBuy.value}
                    onChangeYear={yearBuy.onChange}
                    onChangeMonth={monthBuy.onChange}
                    onChangeDay={dayBuy.onChange}
                    daysArray={arrayDaysBuy}
                    errBuyFirst={errBuyFirst}
                    errBuySecond={errBuySecond}
                    onBlur={blurDateBuy}
                    today={today}
                    errorBuyDay={errorBuyDay}
                />
                <DateBlock 
                    label={'Дата продажи'}
                    valueYear={yearSell.value}
                    valueMonth={monthSell.value}
                    valueDay={daySell.value}
                    onChangeYear={yearSell.onChange}
                    onChangeMonth={monthSell.onChange}
                    onChangeDay={daySell.onChange}
                    onClick={handleDateSell}
                    showBtn={true}
                    daysArray={arrayDaysSell}
                    errSellFirst={errSellFirst}
                    errSellSecond={errSellSecond}
                    onBlur={blurDateSell}
                    today={today}
                />
                <CurrencyBlock
                    value={currency.value}
                    onChange={currency.onChange}
                />
                <AmountInput
                    value={moneyBuy.value}
                    onChange={moneyBuy.onChange}
                    prefix={prefix}
                />
                <FormButton 
                    onClick={handleCalculate}
                    buttonLabel={btnCalculateLabel}
                />
            </form>
            {showProfit? 
                <Total
                    amountprice={amountprice}
                    coins={coins}
                    prefix={prefix}
                    percent={percent}
                    onClick={handleReset}
                />
            : null}
        </div>   
    )
}

export default App