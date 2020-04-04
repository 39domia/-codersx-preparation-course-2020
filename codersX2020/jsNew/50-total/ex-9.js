/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

function fromCharCode() {
    var result = '';
    for(var i = 97; i < 123; i++){
        result = result + String.fromCharCode(i);
    }
    return result;
}
console.log(fromCharCode());