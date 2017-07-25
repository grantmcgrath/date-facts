// index.js

const moment = require("moment")
const chalk = require("chalk")
var date = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a")
var dayOfYear = moment().format("DDDo")
var seconds = moment().diff(moment().hour(0).minute(0).second(0), 'seconds')

function dst() {
  if (moment().isDST() == true) {
    return chalk.green("is")
  } return chalk.red("is not")
}

function lpy() {
  if (moment().isLeapYear() == true) {
    return chalk.green("is")
  } return chalk.red("is not")
}

console.log(chalk `It is {blue ${date} }.`)
console.log(chalk `It is the {magenta ${dayOfYear} } day of the year.`)
console.log(chalk `It is {blue ${seconds} } seconds into the day.`)
console.log(`It ${dst()} during Dalight Savings Time.`)
console.log(`It ${lpy()} a leap year.`);
