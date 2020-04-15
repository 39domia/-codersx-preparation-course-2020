/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
function LCNof3() {
    var result3 = [];
    var x = 0;
    while (x < 1001) {
        if (x % 3 === 0) {
            result3.push(x);
        }
        ++x;
    }
    var result5 = [];
    var i = 0;
    while (i < 1001) {
        if (i % 5 === 0) {
            result5.push(i);
        }
        ++i;
    }
    // (function (result3, result5) {
    var tMax = 0;
    for (var a = 0; a < result3.length; a++) {
        for (var b = 0; b < result5.length; b++) {
            if (result3[a] === result5[b]) {
                tMax = result5[b];
                // console.log(result3[a], result5[b]);
            }
        }
    }
    return tMax;
    // })
}
console.log(LCNof3());