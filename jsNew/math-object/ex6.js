/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
 */
const PI = 3.14;
function circumferenceOfCircle(r) {
    return 2*r*PI;
}

function acreageOfCircle(r) {
    return r*r*PI;
}
console.log(circumferenceOfCircle(5))


// 31.400000000000002