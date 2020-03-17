/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
 */

function average(arr) {
    var result = arr.reduce(function (a, b) {
        return a + b;
    }, 0)
    return Math.round(result / arr.length);
}
console.log(average([6, 5.6, 7, 8, 9.9, 6, 8, 9.0, 7.3]))


// 7