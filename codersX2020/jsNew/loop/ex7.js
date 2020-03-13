/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
    var check = false;
    for (var myElement of array) {
        if (myElement === value)
            check = true;
        else check = false;
    }
    return check;
}

console.log(has([5, 4, 4, 8, 4], 1));
//true