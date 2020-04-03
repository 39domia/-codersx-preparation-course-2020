/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var request = require('request');
const axios = require('axios');
var fs = require('fs');

function load(path) {
    return new Promise(function (resolve, reject) {
        axios(path, function (error, res, body) {
            if (error !== null) {
                reject(error);
            }
            else {                
                resolve(body);
            }
           
        });
    })
}
load('https://jsonplaceholder.typicode.com/todos/1')
    .then((x) => {        
        fs.writeFileSync('data2.json', x);
    })    
    .catch((err) => {
        console.log(err)
    });


// // Make a request for a user with a given ID
// axios('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     // handle success
//     fs.writeFileSync('res.html', response)
//     // console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     fs.writeFileSync('err.txt', error)
//     // console.log(error);
//   })
//   .then(function (body) {
//     console.log(body)
//   });
