/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

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