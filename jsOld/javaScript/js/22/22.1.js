// Given an array of arrays, flatten them into a single array

/**
 * Example:
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 *
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// var connectedArr = [];

function flatten(arr) {
    return arr.reduce(function (a, b) {
        var v = [];
        // v = a + b;
        // return v;
        if (a.indexOf(b) === -1) {
            v = a.concat(b);
        }
        return v;
    })
}

console.log(flatten(arrays));
// console.log(arrays[0]);
