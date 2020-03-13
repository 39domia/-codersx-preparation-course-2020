/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    var result = 0;
    for (var element of array) {
        result = result + element;
    }
    return result;
}
console.log(sum([6, 7, 7, 5, 4, 2, 4]));