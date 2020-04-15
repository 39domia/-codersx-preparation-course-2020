//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    var split = str.split('');
    var arrP = []
    var arrT = []
    for (var i = 0; i < split.length; i++) {
        if (split[i] === 'p') {
            arrP.push('p');
        }
        if (split[i] === 't') {
            arrT.push('t');
        }
    }
    if (arrP.length === arrT.length) {
        return true;
    } else
        return false;
}
console.log(equal_pt('paatpss'))


// true