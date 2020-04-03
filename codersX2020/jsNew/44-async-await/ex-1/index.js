var fs = require('fs');
var axios = require('axios');

// fs.readFile('./data.json', { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );
function readFilePromise(pathOrLink) {
    return new Promise(function(resolve, reject){
        fs.readFile(pathOrLink, { encoding: 'utf8'}, function(err, data){
            if (err)
                reject(err);
            else (data)
                resolve('Data downloaded from disk' +  data);
        });        
    });
};
function readUrlPromise(link) {
    return new Promise(function(resolve, reject){    
        axios.get(link, function(err, data){
            if (err){
                reject(err)
            }               
            else (data) 
                resolve(data)     
        })
        .then(function(res) {
            console.log('Data downloaded from url', res.data);
        });    
    });
};
async function run() {
    // var readFile = await readFilePromise('./data.json');
    var readUrl = await readUrlPromise('https://jsonplaceholder.typicode.com/todos/1');
    console.log( readUrl);
    return [ readUrl];
}

run()

// run().then(function(values){
//     console.log(values)
// })

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. 
 * Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */