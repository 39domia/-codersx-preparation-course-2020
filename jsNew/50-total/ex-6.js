/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/

function max(arr) {
    var result = arr[0];
    for (var i = 0; i < arr.length; i++) {    
        if (arr[i + 1] > result) {
            {
                result = arr[i + 1];
                
            }
        } else {
            result;
        }        
    }
    return result;
    // for (var i = 0; i < arr.length; i++){
    //     arr[i+1] > result? result = arr[i+1]: result;
    // }
    // return result;

} [];

function findMaxDiff(arr) {
    if (arr.length === 0 || arr.length === 1){
        return 0;
    }
    var diff = [];
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i] - arr[i +1];
        var b = Math.abs(a);
        diff.push(b);

    }
    return max(diff);

}
console.log(findMaxDiff([5]))


// 27