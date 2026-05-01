console.log("=== LESSON 7 ===");

let name = "Samuel";
let age = 22;
const isStudent = true;

console.log(name, age, isStudent);

function calculateArea(w, h) {
    return w * h;
}

function isEven(n) {
    return n % 2 === 0;
}

console.log(calculateArea(5, 4));
console.log(isEven(10));

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(getGrade(85));

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
