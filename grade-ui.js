import { gradeTracker } from "./gradeTracker.js";

export function runGradeTrackerUI() {
    console.log("=== GRADE TRACKER UI ===");

    // Sample data (UI layer responsibility)
    gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
    gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
    gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

    console.log("Alice Avg:", gradeTracker.getStudentAverage("Alice"));
    console.log("Math Avg:", gradeTracker.getSubjectAverage("math"));

    console.log("Top Student:", gradeTracker.getTopStudent());
    console.log("Struggling:", gradeTracker.getStrugglingStudents());

    console.log(
        "Report Card:",
        gradeTracker.generateReportCard("Alice")
    );
}
