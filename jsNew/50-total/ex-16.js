/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    var result = [];
    while (arr.length > size) {
        result.push(arr.splice(0, size))
    }
    if (arr.length)
        result.push(arr);

    return result;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))


// [[0, 1, 2, 3], [4, 5]]