function isLeapYear(year){
  if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
    return `${year} is a leap year.`
  }else{
    return `${year} is not a leap year.`
  }
}
const year = 1900
const result = isLeapYear(year)
console.log(result)

/*
Build a Leap Year Calculator
A leap year is a year that is divisible by 4, except for years that are divisible by 100 and not divisible by 400. For example, 2000 is a leap year, but 1900 is not. Also, a leap year has an extra day in February, which is the 29th day of the month.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Define a function called isLeapYear that takes a number as an argument.

Outside the function, declare a variable year that stores the value of the year you want to check.

Inside the function, use an if/ else statement or a ternary operator to check if the year is a leap year.

To check if the year is a leap year, fulfill the following conditions:

If the year is divisible by 4, then it is a leap year.
Unless the year is also divisible by 100, then it is not a leap year.
Unless the year is also divisible by 400, then it is a leap year.
If the year is a leap year, return [year] is a leap year.. Otherwise, return [year] is not a leap year.. You will replace [year] with the parameter defined in the isLeapYear function.

You should call the isLeapYear function with year as the argument and assign the result to a variable named result.

You should output the result variable to the console using console.log().

Tests:
Passed:1. You should define a function named isLeapYear.
Passed:2. The isLeapYear function should take a number as an argument.
Passed:3. You should declare a variable year and assign it a value to check if it is a leap year.
Passed:4. The year variable shouldn't be empty.
Passed:5. With 2024 as the value of the year variable, the result should be 2024 is a leap year.
Passed:6. With 2000 as the value of the year variable, the result should be 2000 is a leap year.
Passed:7. With 1900 as the value of the year variable, the result should be 1900 is not a leap year.
Passed:8. You should call the isLeapYear function and pass year as a parameter.
Passed:9. You should declare a result variable.
Passed:10. You should store the result of calling the isLeapYear function in a variable named result.
Passed:11. You should output the result to the console using console.log().

*/