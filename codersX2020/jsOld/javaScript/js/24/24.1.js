// Dùng hàm powerup tính bình phương
// các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    return arr.map(function (x) {
        // console.log(x % 2===0);
        return x;
    })
        .map(function (y) {
            if(y%2===0){
                return Math.pow(y, 2);
            }
            return  y;
        })
}
console.log(powerup([0, 3, 6, 7, 4]));
//expect [0, 3, 36, 7, 16]