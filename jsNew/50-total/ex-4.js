// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    var result = a;
    if (b > result){
        result = b
    }
    if (c > result){
        result = c
    }
    return result;
}
console.log(findMax(-11, 12, 4))


// 23