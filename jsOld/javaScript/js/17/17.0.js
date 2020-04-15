//array.map
// var numbers = [1, 2, 3, 4];
// var squaredNumbers = numbers.map(function (item) {
//     return item*item;
// });
// console.log(squaredNumbers);

var rectangles = [
    {width: 10, height: 5},
    {width: 20, height: 15},
    {width: 30, height: 50}
];
// var rectangular = rectangles.map(function (x) {
//     for (var i = 0; i < rectangles.length; i++){
//         return rectangles[i].width * rectangles[i].height;
//     }
// });
function  getArea(arr) {
    return arr.map(function (x) {
        return x.width*x.height;
    })
}
console.log(getArea(rectangles));

