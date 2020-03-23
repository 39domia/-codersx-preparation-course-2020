/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var fs = require('fs');
var readlineSync = require('readline-sync');

var contacts = [];

function loadData() {
    var readFile = fs.readFileSync('./data.json', {
        encoding: 'utf8'
    });
    contacts = JSON.parse(readFile);    
}

function showContact() {
    for (contact of contacts) {
        console.log(contact.name, contact.phoneNumber);
    }
}

function addContact() {
    var addName = readlineSync.question('Name: ')
    var addPhone = readlineSync.question('Phone number: ')
    var contact = {
        name: addName,
        phoneNumber: parseInt(addPhone)
    };
    contacts.push(contact);
}

function saveData() {
    var saveContacts = JSON.stringify(contacts);
    fs.writeFileSync('./data.json', saveContacts);
}

function menu() {
    console.log('1. Show contacts');
    console.log('2. Add contacts');
    console.log('3. Edit contacts');
    console.log('4. Delete contacts');
    console.log('5. Exit');
    var choose = readlineSync.question('> ');
    switch (choose) {
        case '1':
            showContact();
            menu();
            break;
        case '2':
            addContact();
            saveData();
            menu();
            break;
        case '3':
            break;
        case '4':

        case '5':
            console.log('Thanks and see you next time!');
            break;
        default:
            console.log('Wrong option');
            menu();
            break;
    }
}
loadData();
menu();