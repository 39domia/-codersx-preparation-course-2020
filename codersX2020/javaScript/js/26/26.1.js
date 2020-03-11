/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
    this.name = name;
    this.level = level;
    this.school = 'CodersX';


}
// Student.prototype.school = function () {
//     return "CodersX"
// };
var studenSon = new Student('Son', 'newbie');
console.log(studenSon.school());
console.log(new Student("Herry", "01").school);
