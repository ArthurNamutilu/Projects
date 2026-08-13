// Immutable Function -Function that does not manipulate the original object but instead returns a new Object

const person = {
    name: "Arthur",
    age: "26",
    location: "Dammam"
}

const Jiji = {
    name: "Gg",
    age: "27",
    location: "Riyadh"
}

function updateLocation(person, newLocation) {
    return{
        ...person,
        location: newLocation
    }
}

const person2 = updateLocation(person, "Riyadh")
const person3 = updateLocation(Jiji, "Jeddah")

console.log(person2)
console.log(person)
console.log(person3)

