/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(arr) {
   var result = 0;
   for(var element of arr) {
       result = result + element;
    // console.log(element)
   }
   return result;
}
console.log(sum([1, 2, 3]));
