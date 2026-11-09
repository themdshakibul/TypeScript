function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
//? Test Case
const stringResult = concatenateArrays(["a", "b"], ["c", "d"]);
console.log(stringResult);
const numberResult = concatenateArrays([1, 2], [3, 4], [5]);
console.log(numberResult);
export {};
