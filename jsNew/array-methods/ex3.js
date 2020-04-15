/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

function first(arr, n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result[i] = arr.shift();
    }
    return result;
}

console.log(first([1, 2, 3], 2)); // expect [1, 2]