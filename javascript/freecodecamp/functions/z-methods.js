// JS methods

// SLICE         slice()  - extract part of string/array without changing the original

const word = "Javascript";
const newWord = word.slice(3,-1);  //ascrip
const negWord = word.slice(-4)     //ript
// console.log(word.slice(3,))
// console.log('up')

// REPEAT .repeat() - repeats a sting

console.log("*".repeat(5)) //*****

// REPLACE .replace()  - replaces the first occurence

const str = "I like Python";
const str2 = str.replace("Python", "Javascript")
console.log(str2)

// SPLIT .split() - convert string into an array
const cities = "Riyadh Jeddah, Dammam"
console.log(cities.split())

// .join() turns array into a string
// .reverse() - reverses a string

/*
  pop() - removes last item
  push() - adds items at the end of an array
  shift() - removes first item
  unshift() - Add item at the begiining of an array
 */

// map() - transforms every item

const nums = [2,5,7,8,9]
console.log(nums.map(num => num * 2))

//filter()  - keeps matching items

const divibleByFour = [4, 7, 8, 12, 20, 30, 36]
console.log(divibleByFour.filter(num => num > 8))