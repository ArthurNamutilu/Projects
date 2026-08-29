const employee = {
    name: "Arthur",
    position: "Developer",
    contact: {
        email: "arthur@example.com",
        phone: "0712345678"
    }
};
console.log(employee["contact"]["phone"]);
employee["contact"]["street"] = "Kileleshwa"

employee.contact.city = "Nairobi";

console.log(employee);
