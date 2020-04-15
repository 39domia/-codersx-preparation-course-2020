/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
    var date = new Date(dateString);
    if (date.getDay() === 6 || date.getDay() === 0)
        return true;
    else
        return false;
}



console.log(isWeekend('2019/10/28'))