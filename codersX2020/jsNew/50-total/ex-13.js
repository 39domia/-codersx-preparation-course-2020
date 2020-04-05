/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(str) {
    if(str.startsWith('Py')){
        return str;
    }
    else
        var add = str.split('')
        add.unshift('Py')
        var done = add.join('')
        return done
}
console.log(pyString("Coders X"))


//   "PyCoders X"