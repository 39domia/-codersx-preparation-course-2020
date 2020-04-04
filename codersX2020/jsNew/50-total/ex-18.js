/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
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
console.log(max([5, 2, 9]));
console.log(max([8, 16, 10]));
console.log(max([5, 4, 1]));
console.log(max([5, 4, 1, 2, 4, 5, 444,7 ,8, 9, 88]));