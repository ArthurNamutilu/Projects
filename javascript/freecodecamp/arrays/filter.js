//Filter creates a new array containing only elements that satisfy a given condition
// To get even numbers:

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers);