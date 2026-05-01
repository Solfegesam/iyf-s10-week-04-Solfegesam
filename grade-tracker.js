export const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const values = Object.values(student.grades);
        const total = values.reduce((a, b) => a + b, 0);

        return total / values.length;
    },

    getSubjectAverage(subject) {
        const scores = this.students
            .map(s => s.grades[subject])
            .filter(v => v !== undefined);

        const total = scores.reduce((a, b) => a + b, 0);

        return scores.length ? total / scores.length : 0;
    },

    getTopStudent() {
        return this.students.reduce((top, current) => {
            const topAvg = this.getStudentAverage(top.name);
            const currAvg = this.getStudentAverage(current.name);

            return currAvg > topAvg ? current : top;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(
            s => this.getStudentAverage(s.name) < 70
        );
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const avg = this.getStudentAverage(name);

        return {
            name: student.name,
            grades: student.grades,
            average: Number(avg.toFixed(2)),
            letter: this.getLetterGrade(avg)
        };
    }
};
