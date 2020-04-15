function col(x) {
    console.log(x);
};
// col('hello');
var cartItems = [];

(function () {
    if (cartItems.length === 0) {
        col('Chưa có sản phẩm nào trong giỏ');
    }
    // console.log('hello1')
})()
var x = 3;
var y = 2;
// y += x * 4;
y = (y + x) * 4;
col(y);