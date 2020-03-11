var arr = [1, 2, 3, 4];
function filler(array){
    return array.filter(function (x) {
        return x % 2 ===0;

})
};
console.log(filler(arr));