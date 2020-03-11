// Sử dụng sort method để sắp xếp lại 1 array
// các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
console.log(sortNumber([5, 1, 3, 2]));
//expect [1, 2, 3, 5]