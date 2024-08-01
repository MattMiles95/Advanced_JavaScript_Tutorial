// map, filter & reduce are all iteration methods

/** map method - execute a function on every element
 * of an array, and create a new array containing the
 * results
 */
let mapNums = [1, 2, 3, 4, 5];

let forResults = [];
for (let mapNum of mapNums) {
    forResults.push(mapNum * 2);
}
console.log(forResults);

const mapResults = mapNums.map(mapNum => mapNum * 2);
console.log(mapResults);