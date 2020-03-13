/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */

function isPrimeNumber(x) {
    if (x === 2 ) {
        return true;
    } else {
        if (x % 2 === 0 || x === 1)
            return false;
        else return true;
    }

};
console.log(isPrimeNumber(1));