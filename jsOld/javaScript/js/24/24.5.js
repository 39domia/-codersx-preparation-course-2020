/**
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không?
 */

function rightTriangle(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b)
            return true;
        // else
        //     return false;
    } else return false;
}

console.log(rightTriangle(0, 0, 0));
