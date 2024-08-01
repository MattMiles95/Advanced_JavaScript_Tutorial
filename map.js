/** map method - execute a function on every element
 * of an array, and create a new array containing the
 * results
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];

let forResults = [];
for (let num of nums) {
    forResults.push(num * 2);
}
console.log(forResults);

// Using map()
const multByTwo = function (num) {
    return num * 2;
};
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified with map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified);

// Simplified with map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML',
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS'
    },
];

const registerArray = students.map(student => [student.name, student.id]);
console.log(registerArray);

const registerObject = students.map(student => ({name: student.name, id: student.id}));
console.log(registerObject);

const registerAddAge = students.map(student => ({
    ...student,
    age: Math.floor(Math.random() * (23 - 21 + 1)) + 21 // Random age between 21 and 23
}));
console.log(registerAddAge);

// MAP CHALLENGE