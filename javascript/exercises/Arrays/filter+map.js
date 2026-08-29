const users = [
  { name: "Arthur", age: 25, active: true,  city: "Berlin" },
  { name: "John",   age: 20, active: false, city: "Munich" },
  { name: "Mary",   age: 22, active: true,  city: "Berlin" },
  { name: "Lisa",   age: 28, active: true,  city: "Hamburg" }
];

//Gettings users names of employees who are above 25

const results = users.filter(user => user.age >= 25).map(user => user.name)
const usersStatus = 
  users.map(user => ({
    ...user,
    status: user.active ? "online" : "offline"
  }))


//console.log(results);
console.log(usersStatus);
