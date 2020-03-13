/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    var result = 1;
    for (start; start < end; start++) {
        result = result * start;
    }
    return result;
}


console.log(calculate(2, 12));
//39916800