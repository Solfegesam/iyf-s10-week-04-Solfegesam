import { calculate } from "./calculator.js";

// Simple UI logic (console-driven or DOM-ready)

export function runCalculatorUI() {
    console.log("=== CALCULATOR UI ===");

    const tests = [
        { a: 10, op: "+", b: 5 },
        { a: 10, op: "-", b: 3 },
        { a: 10, op: "*", b: 2 },
        { a: 10, op: "/", b: 0 },
        { a: 2, op: "**", b: 3 }
    ];

    tests.forEach(t => {
        console.log(`${t.a} ${t.op} ${t.b} =`, calculate(t.a, t.op, t.b));
    });
}
