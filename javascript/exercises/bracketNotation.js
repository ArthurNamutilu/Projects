const user = {
    name: "Arthur",
    email: "arthur@example.com",
    age: 25
};

const property = "email";

console.log(user[property]);

function getProperty(object, property){
    return object[property]
}

console.log(getProperty(user, "age"));