/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
// function removeEnd(arr, n) {
//     for (var i = 0; i < n; i++){
//         arr.pop();
//     }
//     return arr;
// }
// console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function result(array) {
    return array.filter(function (x) {
    console.log(x);
    return x.length > 6;
    });
}
console.log(result(words));