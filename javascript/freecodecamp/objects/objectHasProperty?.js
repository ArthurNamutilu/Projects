/* 
    ways to check if an object has a specific property
    1) hasOwnProperty()
 */
const person = {
  name: "Bob",
  idNo: 7199,
  age: 25,
  job: "Designer",
  city: "New York",
  place: "Brookleen"
};
console.log(person.hasOwnProperty("job"))
console.log(person.hasOwnProperty("salary"))
 /*
    check if an object has a property as its own (not inherited)
 */
 
const lady = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(lady, "name"))