/* Exercise 1
Exercise 1

Create an array containing five programming languages.

Then:

Print the first language.
Print the last language.
Print the length of the array.
*/

const programmingLanguages = ["Javascript", "Python", "Java", "Ruby", "Kotlin"]

console.log(programmingLanguages[0]);
console.log(programmingLanguages[programmingLanguages.length-1]);
console.log(programmingLanguages.length);

/* Exercise 2
Given:

const fruits = ["apple", "banana", "orange"];

Change "banana" to "mango".

Expected:

["apple", "mango", "orange"]
*/

const fruits = ["apple", "banana", "orange"];
fruits[1] = "mango"
console.log(fruits);

/*Exercise 3

Given:

const numbers = [10, 20, 30];

Add 40 to the end.

Then add 5 to the beginning.

Expected:

[5, 10, 20, 30, 40]
*/

const numbers = [10, 20, 30];
numbers.push(40);
numbers.unshift(5)

console.log(numbers);

/* Exercise 4

Given:

const numbers = [10, 20, 30, 40];

Remove the first element and the last element.

Expected:

[20, 30]
*/
const numbers2 = [10, 20, 30, 40];
numbers2.shift()
numbers2.pop()

console.log(numbers2);

/* Exercise 5

Given:

const numbers = [4, 7, 2, 9, 1];

Use a for loop to print every number.
*/

const numbers3 = [4, 7, 2, 9, 1];
for(const number of numbers3){
    console.log(number);
}

/* Exercise 6

Given:

const numbers = [4, 7, 2, 9, 1];

Calculate the sum.

Expected:

23

Don't use reduce() yet.

Use a normal loop.
*/

function getSum(arr){
    let sum = 0;
    for(num of arr){
        sum += num
    }
    return sum
}
 const numbers4 = [4, 7, 2, 9, 1];
console.log(getSum(numbers4));

/*  Exercise 7
Given:

const numbers = [4, 7, 2, 9, 1];

Find the largest number.

Expected:

9

Again, use a normal loop.

This is a very good test of your understanding of loops and arrays.
*/
const numbers5 = [4, 7, 2, 9, 1];
function getLargestNumber(arr){
    let largest = arr[0];
    for(const number of arr){
        if(number > largest){
            largest = number
        }
    }
    return largest
}

console.log(getLargestNumber(numbers5));

/*Exercise 8

Given:

const names = ["Arthur", "John", "Mary", "Peter"];

Print:

Hello Arthur
Hello John
Hello Mary
Hello Peter
*/

const names = ["Arthur", "John", "Mary", "Peter"];
for(const name of names){
    console.log(`Hello ${name}`);
}