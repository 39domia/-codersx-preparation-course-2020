/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    let obj = arr.reduce(function (a, b) {
        a[b] = (a[b] || 0) + 1;
        return a;
    }, {});
    let max = Math.max(...Object.values(obj));
    return Object.keys(obj).filter(i => obj[i] === max).map(i => Number(i));
}
console.log(findMostFrequent([1, 1, 2, 2, 1]))

function findMostFrequent(arr) {
    let result = [];
    let tmp = arr.filter((item, index) => arr.indexOf(item) === index);
    let valuearr = tmp.map((x) => arr.filter(i => i === x).length);
    var max = Math.max.apply(null, valuearr);
    for (let i = 0; i < valuearr.length; i++) {
        if (valuearr[i] === max) result.push(tmp[i]);
    }
    return result;
}

// [ 1 ]