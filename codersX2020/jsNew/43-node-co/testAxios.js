var axios = require('axios');
var fs = require('fs');

// axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
function saveData(contents) {
    fs.writeFileSync('dataAxios.txt', contents, {encoding: 'utf8'});
}
  axios.get('https://jsonplaceholder.typicode.com/todos/2', {
    
  })
  .then(function (response) {
    saveData(response);
  })
  .catch(function (error) {
    console.log(error);
  })
