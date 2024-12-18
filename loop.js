// Define an object to store the student's marks
const studentMarks = {
    Mathematics: 85,
    English: 78,
    Science: 92,
    History: 74,
    Computer: 89
};

// Use a for...in loop to iterate over the properties of the object
console.log("Marks of the student:");
for (let subject in studentMarks) {
    if (studentMarks.hasOwnProperty(subject)) {
        console.log(`${subject}: ${studentMarks[subject]}`);
    }
}
