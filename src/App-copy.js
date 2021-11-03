import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import axios from 'axios'
import {today} from './date'

function App() {
    const [coinName, setCoinName] = useState('')
    const [amount, setAmount] = useState(0)
    const [dateBuy, setDateBuy] = useState('')
    const [dateSell, setDateSell] = useState('')
    const [coinBuy, setCoinBuy] = useState(0)
    const [coinsBuy, setCoinsBuy] = useState(0)
    const [coinSell, setCoinSell] = useState(0)
    const [coinsSell, setCoinsSell] = useState(0)
    const [coinToday, setCoinToday] = useState(0)
    const [coinsToday, setCoinsToday] = useState(0)
    const [profit, setProfit] = useState(0)
    const [percent, setPercent] = useState(0)

    const [coinNameValidity, setCoinNameValidity] = useState(false)
    const [dateBuyValidity, setDateBuyValidity] = useState(false)
    const [dateSellValidity, setDateSellValidity] = useState(false)

    const [dateBuyValid, setDateBuyValid] = useState(true)
    const [errorDateBuy, setErrorDateBuy] = useState(0)

    const isDisabledButton = !dateBuyValidity || !dateSellValidity || !coinNameValidity
    const isDisabledButtonBuy = !coinNameValidity
    const isDisabledButtonToday = !coinNameValidity || !dateBuyValidity
    const isDisabledButtonCount = !coinNameValidity || !dateBuyValidity || !dateSellValidity

    var cryptocurrency = coinName.toLowerCase().replace( /\s/g, '-')
    var amountprice
    if (coinBuy <= 100) {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(coinBuy).toFixed(2))
    } else {
        amountprice = new Intl.NumberFormat('ru-RU').format(parseFloat(coinBuy).toFixed(0))
    }

    var buyday = 0
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
            setCoinBuy(res.data.market_data.current_price.rub)
        })
        .catch(err => setErrorDateBuy(0.000001))
    }

    const getSellPrice = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptocurrency}/history?date=${dateSell}`)
        .then(res => {
            setCoinSell(res.data.market_data.current_price.rub)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getBuyPrice()
    }, [dateBuy])

    useEffect(() => {
        getSellPrice()
    }, [dateSell])

    useEffect(() => {
        if (errorDateBuy > coinBuy) {
            setDateBuyValid(false)
            setDateBuyValidity(false)
        } else {
            setErrorDateBuy(0)   
        }
    }, [isDisabledButton])

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

    var unit_first = 1
    if (coinBuy < 5) {
        unit_first = 300
    } if (coinBuy < 1.5) {
        unit_first = 500
    } if (coinBuy < 1) {
        unit_first = 1000
    } if (coinBuy < 0.7) {
        unit_first = 10000
    } else {
        unit_first = 1
    }

    var unit_second = 0.1
    if (coinBuy < 5) {
        unit_second = 100
    } if (coinBuy < 2.5) {
        unit_second = 50
    } else {
        unit_second = 0.1
    }

    function handlePlusFirst(e) {
        e.preventDefault()
        setAmount(amount + unit_first)
        setCoinsBuy(coinsBuy + coinBuy * unit_first)
        setCoinsSell(coinsSell + coinSell * unit_first)
        setCoinsToday(coinsToday + coinToday * unit_first)
    }
    function handleMinusFirst(e) {
        e.preventDefault()
        if (amount < unit_first) {
            setAmount(0)
            setCoinsBuy(0)
            setCoinsSell(0)
            setCoinsToday(0)
        } else {
            setAmount(amount - unit_first)
            setCoinsBuy(coinsBuy - coinBuy * unit_first)
            setCoinsSell(coinsSell - coinSell * unit_first)
            setCoinsToday(coinsToday - coinToday * unit_first)
        }
    }
    function handlePlusSecond(e) {
        e.preventDefault()
        setAmount(amount + unit_second)
        setCoinsBuy(coinsBuy + coinBuy * unit_second)
        setCoinsSell(coinsSell + coinSell * unit_second)
        setCoinsToday(coinsToday + coinToday * unit_second)
    }
    function handleMinusSecond(e) {
        e.preventDefault()
        if (amount < unit_second) {
            setAmount(0)
            setCoinsBuy(0)
            setCoinsSell(0)
            setCoinsToday(0)
        } else {
            setAmount(amount - unit_second)
            setCoinsBuy(coinsBuy - coinBuy * unit_second)
            setCoinsSell(coinsSell - coinSell * unit_second)
            setCoinsToday(coinsToday - coinToday * unit_second)
        }
    }
    function handleProfit(e) {
        e.preventDefault()
        setProfit(coinsSell - coinsBuy)
        setPercent(((coinsSell - coinsBuy) / coinsBuy) * 100)
        if (coinsBuy === 0) {
            setPercent(0)
        }
    }
    function resetForm(e) {
        e.preventDefault()
        setCoinName('')
        setDateBuy('')
        setDateSell('')
        setAmount(0)
        setCoinBuy(0)
        setCoinSell(0)
        setCoinsBuy(0)
        setCoinsSell(0)
        setProfit(0)
        setCoinToday(0)
        setCoinsToday(0)
        setPercent(0)
        setCoinNameValidity(false)
        setDateBuyValidity(false)
        setDateSellValidity(false)
        setErrorDateBuy(0)
        setDateBuyValid(true)
    }

    return (
        <div className='cryptonew__container'>
            <form className='crypronew__form'>
                <div className='coinname__container'>
                    <select 
                        className={`crypronew__coinname  ${isDisabledButtonBuy ? 'disabled' : 'valid'}`}
                        name='coinname' 
                        type='text'
                        value={coinName}
                        onChange={handleChangeCoinName}
                    >
                        <option value=''></option>
                        <option value='bitcoin'>Bitcoin</option>
                        <option value='ethereum'>Ethereum</option>
                        <option value='dogecoin'>Dogecoin</option>
                        <option value='dogecoin'>Ripple</option>
                        <option value='dogecoin'>Tether</option>
                    </select>
                </div>
                <div className='buydate__container'>
                    <NumberFormat 
                        className={`cryptonew__buydate crypronew__input ${isDisabledButtonBuy ? 'disabled' : 'valid'}`}
                        name='buydate'
                        type='text'
                        format="##-##-####"
                        mask={['_', '_', '_', '_', '_', '_', '_', '_']}
                        placeholder='buy date'
                        autocomplete='off'
                        value={dateBuy}
                        onChange={handleChangeDateBuy}
                    />
                    <button 
                        className={`btn__input-date ${isDisabledButtonBuy ? 'disabled' : 'valid'}`}
                        onClick={handleDateBuy}
                        disabled={isDisabledButtonBuy}
                    >first day</button>
                </div>
                {!dateBuyValid && <span className='error__date-buy'>обновите форму и введите дату позднее или воспользуйтесь кнопкой автозаполнения</span>}
                <div className='selldate__container'>
                    <NumberFormat 
                        className={`cryptonew__selldate crypronew__input ${isDisabledButtonToday ? 'disabled' : 'valid'}`}
                        name='selldate'
                        type='text'
                        format="##-##-####"
                        mask={['_', '_', '_', '_', '_', '_', '_', '_']}
                        placeholder='sell date'
                        autocomplete='off'
                        value={dateSell}
                        onChange={handleChangeDateSell}
                    />
                    <button
                        className={`btn__input-date ${isDisabledButtonToday ? 'disabled' : 'valid'}`}
                        disabled={isDisabledButtonToday}
                        onClick={handleDateSell}
                    >today</button>
                </div>
                <div className='amoun__container'>
                    <div className='amount__btns amount__btns-plus'>
                        <button 
                            className={`amount__btn-plus-up ${isDisabledButtonCount ? 'disabled' : 'valid'}`} 
                            disabled={isDisabledButtonCount}
                            onClick={handlePlusFirst}
                        >+</button>
                        <button 
                            className={`amount__btn-plus-down ${isDisabledButtonCount ? 'disabled' : 'valid'}`} 
                            disabled={isDisabledButtonCount}
                            onClick={handlePlusSecond}
                        >+</button>
                    </div>
                    <div className={`amoun__info ${isDisabledButtonCount ? 'disabled' : 'valid'}`}>
                        <p className='amoun__title'>кол-во монет:</p>
                        <div className='amoun__info-counter'>
                            <p className='amoun__value'>{new Intl.NumberFormat('ru-RU').format(parseFloat(amount).toFixed(2))}</p>
                            <p className='amoun__price'>{amountprice}&#8381;</p>
                        </div>
                    </div>
                    <div className='amount__btns amount__btns-minus'>
                        <button 
                            className={`amount__btn-minus-up ${isDisabledButtonCount ? 'disabled' : 'valid'}`} 
                            onClick={handleMinusFirst}
                            disabled={isDisabledButtonCount}
                        >-</button>
                        <button 
                            className={`amount__btn-minus-down ${isDisabledButtonCount ? 'disabled' : 'valid'}`} 
                            onClick={handleMinusSecond}
                            disabled={isDisabledButtonCount}
                        >-</button>
                    </div>
                </div>
                    <div className='coin__total-container'>
                        <p className='coin__crypto_total-value-title'>Покупка на: </p>
                        <p className='coin__crypto_total-value-price'>{new Intl.NumberFormat('ru-RU').format(parseFloat(coinsBuy).toFixed(2))} &#8381;</p>
                    </div>
                    <div className='coin__total-container-calculator'>
                        <div className='calculator__container'>
                            <p className='calculator-total'>{amount.toFixed(1)} x {new Intl.NumberFormat('ru-RU').format(parseFloat(coinSell).toFixed(2))}</p>
                            <p className='calculator-total'>=</p>
                            <p className='calculator-total'>{new Intl.NumberFormat('ru-RU').format(parseFloat(coinsSell).toFixed(2))}</p>
                            <p className='calculator-total'>-</p>
                            <p className='calculator-total'>{new Intl.NumberFormat('ru-RU').format(parseFloat(coinsBuy).toFixed(2))}</p>
                        </div>
                        <div className='calculator__total'>
                            <p className='coin__crypto_total-value-title'>Доход: {percent.toFixed(0)}%</p>
                            <p className='coin__crypto_total-value-price'>{new Intl.NumberFormat('ru-RU').format(parseFloat(profit).toFixed(2))} &#8381;</p>
                        </div>
                    </div>
                <div className='form-btns__container'>
                    <button className={'crypronew__submit'} onClick={handleProfit}><p className='style'>total</p></button>
                    <button className='crypronew__reset' type='button' onClick={resetForm}><p className='style'>reset</p></button>
                </div>
            </form>
        </div>
    )
}

export default App



/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
