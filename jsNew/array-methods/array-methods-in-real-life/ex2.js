   /**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
 */

function removeDuplicate(arr) {
    let isExist = (arr1, x) => arr1.indexOf(x) > -1

    let ans = [];
    arr.filter(element => {
        if (!isExist(ans, element)) ans.push(element);
    });
    return ans;
}
console.log(removeDuplicate([1, 2, 3, 4, 1, 2, 3]));
// var a = [1, 2, 3, 4, 1, 2]
// console.log(a.indexOf(5))