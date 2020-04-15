//Sử dụng sort method để sắp xếp lại 1 array
// các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
    return arr.sort(function (a, b) {
        return b - a ;
    })
}
console.log(sortNumber([5, 1, 3, 2]));