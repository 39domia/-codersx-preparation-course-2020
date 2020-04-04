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
function readFilePromise(path) {
    return new Promise(function(resolve, reject){
        fs.readFile(path, { encoding: 'utf8'}, function(err, data){
            if (err)
                reject(err);
            else (data)
            resolve(data);
        })
                     
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
        
    });
};
async function run() {
    var readFile = await readFilePromise('./data.json')
    .then(function(data) {
        console.log(data);
        });  
    var readUrl = await readUrlPromise('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(res) {
        console.log('Data downloaded from url', res.data);
    }); 
    return [readFile, readUrl];
    
}

run()


// run().then(function(values){
//     console.log(values)
// })

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. 
 * Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */