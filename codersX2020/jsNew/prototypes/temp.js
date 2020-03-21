/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
 */

function Shape(color, shape, fill) {
    this.color = color,
    this.shape = shape,
    this.fill = fill
}
Shape.prototype.name = function(){
     return ' Cu lua';
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);
console.log(shape2.name());
console.log(shape1.name());

// 'object'