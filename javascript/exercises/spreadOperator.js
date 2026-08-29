// Shallow Copy (Clone an Object)

const person = { name: "Alex", age: 30 };

const copy = { ...person };

console.log(copy);          // { name: "Alex", age: 30 }
console.log(copy === person); // false (different reference)


// Using Spread Operator to Merge Objects
// Later properties overwrite earlier ones with the same key:

const defaults = { theme: "dark", fontSize: 14, lang: "en" };
const userSettings = { fontSize: 16, lang: "de" };

const settings = { ...defaults, ...userSettings };

console.log(settings);
// { theme: "dark", fontSize: 16, lang: "de" }