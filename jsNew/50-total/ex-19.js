/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    var split1 = str1.split('');
    var split2 = str2.split('');
    var sort1 = Array.from(split1).sort();
    var sort2 = Array.from(split2).sort();
       
    return sort1.length === sort2.length && sort1.every(function (value, index) {
        return value === sort2[index]
    })
    // return [sort1, sort2]
}
console.log(rearrangeChar('yhnbgt', 'hybtgn'));


// true