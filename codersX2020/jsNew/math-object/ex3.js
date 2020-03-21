/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    return arr.map(function (x) {
        return Math.abs(x);
    })
}
positiveNumber([46, -17, 32, 42, 9, -34, -30, -34, -48, 17])


//   [ 46, 17, 32, 42, 9, 34, 30, 34, 48, 17 ]  