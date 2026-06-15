// let
let studentCount = 10;
studentCount = 11;

console.log("Student Count:", studentCount);

// const
const collegeName = "VETIAS";

console.log("College Name:", collegeName);

// Template literals
let studentName = "Arun";

console.log(`Welcome ${studentName} to ${collegeName}`);

// Object
const student = {
    name: "Arun",
    age: 18,
    department: "CSA"
};

// Destructuring
const { name, age, department } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

// Arrow Function
const displayStudent = () => {
    console.log(`Student Name: ${name}`);
};

displayStudent();

// Array
const students = [
    "Arun",
    "Priya",
    "Deva"
];

console.log(students);

// Spread Operator
const updatedStudents = [
    ...students,
    "Ragavi"
];

console.log(updatedStudents);

// Rest Operator
function maximumMarks(...marks) {
    let max = Math.max(...marks);
    return max;
}

console.log("Maximum Marks:", maximumMarks(100, 40, 50));