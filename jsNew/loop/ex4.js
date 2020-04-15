/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    var result = 1;
    for (var mul of arr) {
        // console.log(arr.mul)
        result = result * mul
        
    }
    return result;
};

console.log(multiply([2, 3, 4]));


// 24