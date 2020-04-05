/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    var result = [];
    result = str.split('')
    for (var i = 0; i < result.length; i++){
        result[i] = result[i].charCodeAt(0)
    }
    for (var i = 0; i < result.length; i++){
        result[i] +=1;
    }
    for (var i = 0; i < result.length; i++){
        result[i] = String.fromCharCode(result[i])
    }
    return result.join('')
}
console.log(toNextChar('abc'))


// "bcd"