/* var coffeeMachine = {
    makeCoffee: function(onFinish){
        console.log('Making coffee...');
        onFinish();
    }
}
function beep(){
    console.log('Beep beep...')
}
coffeeMachine.makeCoffee(beep);
coffeeMachine.makeCoffee(function(){
    console.log('tit tit')
});
 */
function transformArray(arr, transformer) {
    const newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = transformer(arr[i]); // chú ý dòng này
    }
    return newArr;
}

function toUpperCase(str) {
    return str.toUpperCase(); // chuyển đổi 1 string sang uppercase
}

var newArr = transformArray(['a', 'b'], toUpperCase);
console.log(newArr); // ['A', 'B']