
var todayDate = new Date()
var currYear = todayDate.getFullYear()
var currMonth = todayDate.getMonth()+1
var currDay = todayDate.getDate()
if (currMonth <= 9) {
    currMonth = '0' + currMonth
}
if (currDay <= 9) {
    currDay = '0' + currDay
}

export var today = (currDay + '-' + currMonth + '-' + currYear)