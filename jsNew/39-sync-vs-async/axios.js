const axios = require('axios').default;

function getUserAccount() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

function getUserPermissions() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/2');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        // Tất cả request đều đã được thực hiện xong
    }));