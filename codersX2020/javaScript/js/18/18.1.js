// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    return arr.filter(function (x) {
        return x >= 5;
    })
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2, 5]));