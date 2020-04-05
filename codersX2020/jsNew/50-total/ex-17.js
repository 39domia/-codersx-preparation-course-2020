/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
    var sort = arr.sort(function(x, y){
        return y - x;
    })
    var splice = sort.splice(0, k);
    return splice.reduce(function(x, y){
        return x + y;
    })
}
console.log(maxOfSumChain([1, 3, 2, 6, 2], 3))


// 11