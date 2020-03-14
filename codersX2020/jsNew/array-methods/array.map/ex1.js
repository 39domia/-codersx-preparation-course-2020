/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
    return num * 3;
}

function multiply(numbers) {
    return numbers.map(function (x) {
         return x * 3;
    });
    
}

// function multiply(numbers) {
//     var result = []
//      numbers.map(function (x) {
//          result[numbers.indexOf(x)] =  x * 3;
//         // console.log(x);
//     })
//     return result;
// }
console.log(multiply([5, 5, 8]))


// [30, 15, 24]