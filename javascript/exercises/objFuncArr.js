const employees = [
    { name: "Arthur", department: "IT", salary: 50000 },
    { name: "John", department: "HR", salary: 45000 },
    { name: "Mary", department: "IT", salary: 60000 }
];

const IT_Employees = employees.filter(employee => employee.department === "IT");

console.log(IT_Employees);