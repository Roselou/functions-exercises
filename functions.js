// TODO: add your solutions here!

// 3 BUILD YOUR OWN POWER FUNCTION
function toTheNthPower(number, power) {
var total = 1
for (var i = 0; i < power; i++) {
debugger
total = number*total
}
return total
}

// 10 MAKE A TRIANGLE FUNCTION
function printTriangle(length){
var currentStr = ''
for (var i = 0; i < length; i++) {
currentStr += '*'
console.log(currentStr)
}
}
