/**
 * reduce method - reduce all of the elements to a
 * singular value/output
 */
const reduceNums = [0, 1, 2, 3, 4];
let sum = reduceNums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);