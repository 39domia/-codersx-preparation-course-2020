var person = {
    firstName: 'Anh',
    lastName: 'TranNgoc',
    showFullName: function () {
        console.log(this.firstName + '' + this.lastName)
        // return this
    }
};
var anotherPerson = {
    firstName: 'Son',
    lastName: 'NguyenSyHoai'
};
console.log(person.showFullName());
console.log(person.showFullName.apply(anotherPerson));

//Chúng ta có một đối tượng đơn giản với phương thức clickHandler.
// Đây là phương thức là chúng ta muốn gọi khi một button được click.
var user = {
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],
    clickHandler: function (event) {
        // Chọn ngẫu nhiên 0 hoặc 1
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;

        // Dòng dưới đây sẽ in ra tên và tuối của một user ngẫu nhiên
        // lấy từ array
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
};

// button được bảo bởi hàm jQuery $, nên nó trở thành một đối tượng
// jQuery.  Và output sẽ la undefined bởi vì không có thuộc tính data
// cho đối tượng button