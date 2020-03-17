var numbers = [1, 3, 2, 10, 8]
function sortN(arr){
    return arr.sort(function(a, b){
        return b-a;
    })
}
console.log(sortN(numbers))