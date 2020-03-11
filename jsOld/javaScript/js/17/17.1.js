/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */
//
function tripple(num) {
    return num*3;

    }

// console.log(tripple(4));
function multiply(numbers) {
    return numbers.map(function (x) {
        // return numbers[y] * 3;
        // return tripple(y);
        return x*3;
    })
};

var arr = [ 4, 6, 3];
console.log(multiply(arr));