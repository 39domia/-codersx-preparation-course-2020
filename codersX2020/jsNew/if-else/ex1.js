var age = 1;
var canDrive;
function col(x) {
    console.log(x);
};

// Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
/**
 * if (age > 16) {
 *  canDrive = true;
 * } else {
 *  canDrive = false;
 * }
 * 
 * @param {number} age;
 * @return {boolean} canDrive;
 */

function checkCanDrive(age) { 
    age > 16? canDrive = true: canDrive= false;
    return canDrive;
}
col(checkCanDrive(age));
