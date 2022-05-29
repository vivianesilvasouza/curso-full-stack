const moment = require('moment')
function sayName(name) {
    console.log(name);
    console.log(moment().format('HH:mm'))
}
sayName('viviane')