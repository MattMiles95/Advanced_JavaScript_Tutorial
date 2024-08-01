// Vanilla JavaScript Function
function addTwoNumbersV(a, b) {
    // Code block
    return a + b;
}

let sum1 = addTwoNumbersV(3, 5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbersAF = (a, b) => {
    // Code block
    return a + b;
}

let sum2 = addTwoNumbersAF(3, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbersSLAF = (a, b) => a + b;

let sum3 = addTwoNumbersSLAF(3, 5);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message)
saySomething('Hello there!');

const sayHello = () => console.log('hello');
sayHello()

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());

// ARROW FUNCTIONS CHALLENGE:

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let totalMarks = 0;
    let studentCount = 0;
    
    arr.forEach(student => {
        if (student.results.hasOwnProperty(subject)) {
            totalMarks += student.results[subject];
            studentCount++;
        }
    });
    
    return studentCount > 0 ? totalMarks / studentCount : 0;
};

let averageMarks = averagePoints(students, 'maths');
console.log(averageMarks);
