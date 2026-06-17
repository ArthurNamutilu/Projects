function greetings(user){
    console.log(`Hello ${user}`)
}

greetings("Arthur")
// arrow functions

const greetings2 = userName => console.log(`${userName} How are you today`)
greetings2("Arthur Fred Gg Namutilu")

const calculateArea = (length, width) => {
    return length * width
}

console.log(calculateArea(4, 5));

const unknown = ()=>  {
    console.log("Not Hello")
}

unknown()