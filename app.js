
const calculateSum= require('./sum.js')
console.log("I am entry files");


const {sayHello, name} = require('./multipleExport..js')

sayHello('Ashutosh')
console.log("Exported name is", name);

calculateSum(4,5)

