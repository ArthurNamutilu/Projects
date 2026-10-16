function getEvenNumbersLoop(arr){
  const newArray = []
  for(const number of arr){
    if(number % 2 === 0){
      newArray.push(number)
    }
  }
  return newArray
}

const numbers = [2, 5, 8, 11, 14, 17, 20];
console.log(getEvenNumbersLoop(numbers))

function getEvenNumbersFilter(arr){
  const evenNumbers = arr.filter(number => number % 2 === 0)
  return evenNumbers

}
console.log(getEvenNumbersFilter(numbers))

function doubleEvenNumbers(arr){
  const evenNumbers = arr.filter(number => number % 2 === 0).map(number => number * 2)
  return evenNumbers

}

const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(doubleEvenNumbers(numbers))

const ages = [18, 25, 17, 32, 41, 16, 28];

function getAdults(ages){
  let adultsAge = []
  for(const age of ages){
    adultsAge = ages.filter(age => age > 18)
  }
  return adultsAge.length
}

console.log(getAdults(ages))