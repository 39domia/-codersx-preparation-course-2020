/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
    var dateInPast = date - (n * 1000 * 60 * 60 * 24);
    return dateInPast;
}
console.log(subtractDays(date, 5))