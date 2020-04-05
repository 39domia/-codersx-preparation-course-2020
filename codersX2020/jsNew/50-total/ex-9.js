//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    var split = str.split('');
    for (var i = 0; i < split.length; i++) {
        if (split[i] === split[n]) {
            split.splice(i, 1);
        }
    }
    return split.join('');
}
console.log(omitCharAt("Hello Quang Dat", 8))


// "Hello Qung Dat"