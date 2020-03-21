/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */
var falsyArr = [false, 0, 0n, '', "", ``, null, undefined, NaN];

function isTruthy(x) {
    if (falsyArr.indexOf(x) === -1) {
        return true;
    } else
        return false;
}

console.log(isTruthy(true));