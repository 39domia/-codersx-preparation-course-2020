/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    var rank = '';
    score > 0 && score < 5 ? rank = 'C' : (score >= 5 && score < 7) ? rank = 'B' : (score >= 7 && score <= 10) ? rank = 'A' : rank = 'Unranked';
    return rank;
}
console.log(grade(4));
console.log(grade(5));
console.log(grade(7));
console.log(grade(11));
console.log(grade(-1));