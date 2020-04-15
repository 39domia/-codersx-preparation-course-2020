// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
    var result = str.split('');
    result.splice(n, result.length - n * 2);
    return result.join('');
}
console.log(newString("1wyg5yhd45", 2))