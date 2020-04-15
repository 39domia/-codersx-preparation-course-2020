var fs = require('fs');
var readlineSync = require('readline-sync');

var students =[];

// take data from data.json and push to students array.
function loadData() {
    var studentJson = fs.readFileSync('./data.json', {encoding: 'utf8'});
    students = JSON.parse(studentJson);
}

function showStudents() {    
    console.log(students);
    
};

function addStudent() {
    var insertName = readlineSync.question('Please insert your name: ')
    var insertAge = readlineSync.question('Please insert your age: ')
    var student = {
        name: insertName,
        age: parseInt(insertAge)
    };
    students.push(student);    
}

function saveAndExit() {
    var savedStudents = JSON.stringify(students);
    fs.writeFileSync('./data.json', savedStudents);
}

function menu() {        
    console.log('1. Show students');
    console.log('2. Creat a new student');
    console.log('3. Save and exit');
    var option = readlineSync.question('Please choose your option: ')
    console.log('> ' + option);
    switch (option) {
        case '1':
            showStudents();
            menu()
            break;
        case '2':
            addStudent();
            menu();
            break;
        case '3':
            console.log('Thank you and see you later');
            saveAndExit();            
            break;
        case '4':
            break;
        default:
            console.log('Wrong option');
            menu();
    }
}
loadData();
menu();