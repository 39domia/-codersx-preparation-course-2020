// function onDone(y) {
//     console.log(y)
// }

// function onErr(err) {
//     console.log(err);
// }

// function readFile(path) {
//     return fs.readFile(path, {
//         encoding: 'utf8'
//     });
// }

// readFile('data.txt')
//     .then(onDone)
//     .catch(onErr)
// readFile('muda.txt')
//     .then(onDone)

var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {
            encoding: 'utf8'
        }, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    })
}

Promise.all([
        readFilePromise('muda.txt'),
        readFilePromise('muda2.txt'),
        readFilePromise('muda3.txt')
    ])
    .then(function (x) {
        console.log(x);
    })
    .catch(function (error) {
        console.log(error);
    })
console.log(typeof Promise.all);