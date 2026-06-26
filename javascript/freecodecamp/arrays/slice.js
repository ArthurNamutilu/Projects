// slice() method of Array instances returns a shallow copy of a portion of an array

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const subset = colors.slice(1, 4); 

console.log(subset); // ['green', 'blue', 'yellow']
console.log(colors); // ['red', 'green', 'blue', 'yellow', 'purple'] (Unchanged)
