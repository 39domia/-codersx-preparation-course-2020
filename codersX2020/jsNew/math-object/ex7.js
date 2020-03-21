/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
 */

function trigonim(number) {
    // return [Math.sin(number).toFixed(3),Math.cos(number).toFixed(3),Math.tan(number).toFixed(3)];
    var result =  [Math.sin(number),Math.cos(number),Math.tan(number)];
    return result.map(x => x.toFixed(3));
}
console.log(trigonim(45))

