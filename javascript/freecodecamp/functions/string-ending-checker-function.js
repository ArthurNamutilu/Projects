function confirmEnding(strToCheck, strCheckAgainst){
  const lastEndingLength = strCheckAgainst.length
  if(strToCheck.slice(- lastEndingLength) === strCheckAgainst){
    return true
  }else{
    return false
  }
}
console.log(confirmEnding("Arthur", "ur"))

/*
Build a Confirm the Ending Tool
In this lab, you will implement a function that checks if a string ends with the given target string.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
The function should return true if the first string ends with the second string, and false otherwise.
You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.
Tests:
Passed:1. You should create a function named confirmEnding.
Passed:2. confirmEnding should take 2 parameters.
Passed:3. confirmEnding("Bastian", "n") should return true.
Passed:4. confirmEnding("Congratulation", "on") should return true.
Passed:5. confirmEnding("Connor", "n") should return false.
Passed:6. confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Passed:7. confirmEnding("He has to give me a new name", "name") should return true.
Passed:8. confirmEnding("Open sesame", "same") should return true.
Passed:9. confirmEnding("Open sesame", "sage") should return false.
Passed:10. confirmEnding("Open sesame", "game") should return false.
Passed:11. confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain") should return false.
Passed:12. confirmEnding("Abstraction", "action") should return true.
Passed:13. Your code should not use the built-in method .endsWith() to solve the lab.
*/