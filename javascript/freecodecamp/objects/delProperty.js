const person = {
  name: "Bob",
  idNo: 7199,
  age: 25,
  job: "Designer",
  city: "New York",
  place: "Brookleen"
};
console.log(person.place)
delete person.place
console.log(person.place)
// console.log(person)

const {name, job, ...remainingProperties} = person

// console.log(person)
console.log(remainingProperties)  // creates a new object without the specified properties
