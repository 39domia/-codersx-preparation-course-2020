/**
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

// function first(arr, n) {
//     var a = [];
//     for (var i = 0; i< n; i++) {
//         var b = arr.shift();
//         a = a.concat(b);
//         // console.log(a);
//     }
//     return a;
// }
//
// console.log(first([1, 2, 3], 2));
// // expect [1, 2]
const nameOfMembers = ['Tuan Anh', 'Dung', 'Tung', 'Phuc'];
console.log(nameOfMembers.pop());
console.log(nameOfMembers.pop());
console.log(nameOfMembers.pop())
console.log(nameOfMembers);