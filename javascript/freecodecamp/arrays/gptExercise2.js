const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(number => number * 2)
console.log(doubles);

const numbers2 = [3, 8, 11, 14, 17, 20];
const evenNumbers = numbers2.filter(number => number % 2 === 0)
console.log(evenNumbers);

const numbers3 = [5, 12, 18, 3, 25];
console.log(numbers3.includes(18));
console.log(numbers3.includes(50));

const fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.indexOf("orange"));

function countGreaterThanTen(numbers) {
    let count = 0
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > 10){
        count += 1;
      }
    }
    return count
}

 const nums = [5, 12, 8, 20, 15, 39];
 console.log(countGreaterThanTen(nums))

 function findSmallest(numbers) {
  let smallestNumer = numbers[0]
  for(const number of numbers){
    if(number < smallestNumer){
      smallestNumer = number
    }
  }
  return smallestNumer

}

console.log(findSmallest([8, 3, 12, 1, 6]))


function reverseArray(arr){
  let reversedArray = []
    for(let i = arr.length - 1; i >= 0; i--){
      reversedArray.push(arr[i])
    }
    return reversedArray;
}
const numbers4 = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers4))

function removeDuplicates(arr) {
  let newArray = []
  for(const num of arr){
    if(!newArray.includes(num)){
      newArray.push(num)
    }
  }
  return newArray
}
const numbers5 = [1, 2, 2, 3, 4, 4, 5, 5, 5];

console.log(removeDuplicates(numbers5))