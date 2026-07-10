// it allows you to add or remove elements from any position in an array, including the middle. return value is array of items removed from the array, returns empty array if nothing was removed

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed);