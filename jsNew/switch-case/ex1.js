/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'A':
            case 'a':
                arr[i] = 1;
                break;
            case 'B':
            case 'b':
                arr[i] = 2;
                break;
            default:
                arr[i] = 0;
                break;
        }
    }
    return arr;
}
// transform(['A', 'c', 'a', 'B', 'd']);
console.log(transform(['A', 'c', 'a', 'B', 'd']));
//transform(['A', 'b', 'a', 'B', 'd'])
// [1, 2, 1, 2, 0]