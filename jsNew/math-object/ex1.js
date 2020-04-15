// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    return arr.map(function (x) {
        if (x % 2 === 0)
            return Math.pow(x, 2)
        else return x;
    })
}
console.log(powerup([1, 2, 3, 4]))


// [1, 4, 3, 16]