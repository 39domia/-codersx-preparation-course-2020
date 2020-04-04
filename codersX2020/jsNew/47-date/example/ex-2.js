/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
    var fromDate = new Date(a);
    var toDate = new Date(b);
    console.log(fromDate, toDate)
    var diffMs = toDate.getTime() - fromDate.getTime();
    return diffMs;
}
console.log(diffMs("02/10/2019", "10/10/2019"))