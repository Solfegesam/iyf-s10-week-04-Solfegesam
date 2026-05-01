import "../exercises/lesson7.js";
import "../exercises/lesson8.js";
import "../exercises/challenges.js";

import { runCalculatorUI } from "./calculator/calculator-ui.js";
import { runGradeTrackerUI } from "./grade-tracker/grade-ui.js";

/**
 * Application Entry Point
 * This file initializes all modules in a structured order.
 * Acts as a controller for running demonstrations.
 */

function initApp() {
    console.log("==================================");
    console.log("   JAVASCRIPT FUNDAMENTALS APP    ");
    console.log("==================================");

    console.log("\n--- Running Exercises ---");
    console.log("Lessons 7, 8 & Challenges loaded\n");

    console.log("--- Running Calculator Module ---");
    runCalculatorUI();

    console.log("\n--- Running Grade Tracker Module ---");
    runGradeTrackerUI();

    console.log("\n==================================");
    console.log("   APPLICATION EXECUTION COMPLETE ");
    console.log("==================================");
}

initApp();
