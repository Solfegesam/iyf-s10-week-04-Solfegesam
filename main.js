import "../exercises/lesson7.js";
import "../exercises/lesson8.js";
import "../exercises/challenges.js";

import { calculate } from "./calculator/calculator.js";
import { gradeTracker } from "./grade-tracker/gradeTracker.js";

console.log("=== CALCULATOR TESTS ===");
console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(2, "**", 3));

console.log("=== GRADE TRACKER TESTS ===");

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));
