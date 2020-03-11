/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu:
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

function sum(numbers) {
    var sum1= 0;
    for (var index of numbers){
        sum1 = sum1 + index;
    }
    return sum1;
}
console.log(sum([0]));