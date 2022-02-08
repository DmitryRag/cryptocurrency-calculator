var todayDate = new Date()
export var currYear = todayDate.getFullYear()
export var currMonth = todayDate.getMonth()+1
export var currDay = todayDate.getDate()
if (currMonth <= 9) {
    currMonth = '0' + currMonth
}
/* if (currDay <= 9) {
    currDay = '0' + currDay
} */

/* export const crypto = ['Bitcoin', 'Ethereum', 'Dogecoin', 'Ripple', 'Tether'] */

export var today = (currDay + '-' + currMonth + '-' + currYear)

export const requestDate = (day, month, year) => {
    return day + '-' + month + '-' + year
}

var dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

export const getDayArray = (days) => {
    return dayArray.slice(0, days)
}

export const getDaysInMonth = (year, month) => {
    return month === '02' ? 28 + (year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? 1 : 0) : 1):0) : 31 - (month - 1) % 7 % 2;
}

export const beforeDate = (cryptocurrency) => {
    if (cryptocurrency === 'bitcoin') {
        return '28-04-2013'
    } if (cryptocurrency === 'ethereum') {
        return '07-08-2015'
    } if (cryptocurrency === 'ripple') {
        return '04-08-2013'
    } if (cryptocurrency === 'tether') {
        return '02-03-2015'
    } if (cryptocurrency === 'dogecoin') {
        return '15-12-2013'
    }
}

export const errorBeforeDate = (cryptocurrency) => {
    if (cryptocurrency === 'bitcoin') {
        return '28 апреля 2013'
    } if (cryptocurrency === 'ethereum') {
        return '07 августа 2015'
    } if (cryptocurrency === 'ripple') {
        return '04 августа 2013'
    } if (cryptocurrency === 'tether') {
        return '02 марта 2015'
    } if (cryptocurrency === 'dogecoin') {
        return '15 декабря 2013'
    }
}
    
export const currencyChoise = (currency) => {
    if (currency === 'usd') {
        return '$'
    } else if (currency === 'eur') {
        return '€'
    } else if (currency === 'rub') {
        return '₽'
    } else {
        return ''
    }
}