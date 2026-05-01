console.log("=== LESSON 8 ===");

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);

const person = {
    name: "John",
    age: 30
};

console.log(person.name);
