
var todayDate = new Date()
export var currYear = todayDate.getFullYear()
export var currMonth = todayDate.getMonth()+1
export var currDay = todayDate.getDate()
if (currMonth <= 9) {
    currMonth = '0' + currMonth
}
if (currDay <= 9) {
    currDay = '0' + currDay
}

export var today = (currDay + '-' + currMonth + '-' + currYear)

