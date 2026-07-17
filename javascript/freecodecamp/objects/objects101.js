const Person = {
    name: "Arthur",
    idNo: 7199,
    isAvailable: true
}

console.log(Person.name)       // .dot notation
let newID = "idNo"
console.log(Person["idNo"])       // []notation notation

console.log(typeof(Person.isAvailable))
