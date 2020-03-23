var fs = require('fs');
var fsPromise = require('promise-fs');
 

// fsPromise.readFile("data.txt")
//   .then(function(x) {
//       console.log(String(x));
//   }) // Do something with the content
//   .catch(err => console.log(err)) // Handle error

fs.readFile('data.txt', (err, data) => {
    if (err) throw err;
    var a = String(data);
    console.log(a);
  });