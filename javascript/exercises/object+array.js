const users = [
    { name: "Arthur", age: 25 },
    { name: "John", age: 30 },
    { name: "Mary", age: 22 }
];

const employees = [
    {
        id: 1,
        name: "Arthur",
        department: "IT",
        salary: 50000,
        active: true
    },
    {
        id: 2,
        name: "John",
        department: "HR",
        salary: 45000,
        active: false
    },
    {
        id: 3,
        name: "Mary",
        department: "IT",
        salary: 60000,
        active: true
    },
    {
        id: 4,
        name: "David",
        department: "Finance",
        salary: 55000,
        active: true
    }
];

const activeEmployees = employees.filter(employee => employee.active)
console.log(activeEmployees);

// const names = users.map(user => user.name );
// const above25 = users.filter(user => user.age >= 25)
// const findMary = users.filter(user => user.name === "Mary")
// console.log(findMary);
// console.log(above25);