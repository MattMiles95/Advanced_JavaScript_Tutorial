/**
 * filter method - filter unwanted elements out of
 * an array, and create a new array containing the
 * results
 */
let filterNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = filterNums.filter(n => n % 2 === 0);
console.log(evens);

let names = ['mike', 'jill', 'matt', 'jenny'];
let mNames = names.filter(name => name.charAt(0) === 'm');
console.log(mNames);