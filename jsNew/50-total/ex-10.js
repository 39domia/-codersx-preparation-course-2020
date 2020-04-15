// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
    if (Math.abs(a - 100) < Math.abs(b - 100))
        return a
    else return b
}
nearestTo100(89, 189)


// 89