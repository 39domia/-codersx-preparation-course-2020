/**
 * Count the occurrences of each element inside an array using reduce
 * Đếm số lần xuất hiện của từng phần tử bên trong một mảng bằng cách sử dụng reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/
function countOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc
    }, {})
}
console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']))

function count(arr) {
    return arr.reduce(function (x, y) {
        // return (x[y]);
        if (x[y])
            x[y]++;
        else x[y] = 1;
        return x;
    }, {})
}
console.log(count(['a', 'b', 'c', 'b', 'a']))
