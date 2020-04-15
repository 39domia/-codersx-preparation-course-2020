/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

function transform(numbers, callback) {
    var result = [];
    for (var count = 0; count < numbers.length; count++) {
        result[count] = callback(numbers[count]);

    }
    return result;
}

function double(num) {
    return num = num * 2;
}
console.log(transform([21, 11, 5], double))


// [42, 22, 10]