/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

var books = [
    {
        ISBN: 01,
        name: 'Truyen Kieu',
        price: 100,
        quantity: 10
    },
    {
        ISBN: 02,
        name: 'Vat Ly 12',
        price: 30,
        quantity: 120
    },
    {
        ISBN: 03,
        name: 'Hoa Hoc 12',
        price: 132,
        quantity: 40
    },
    {
        ISBN: 04,
        name: 'Lich Su 12',
        price: 154,
        quantity: 23
    },
    {
        ISBN: 05,
        name: 'Mac Le nin',
        price: 87,
        quantity: 43
    },
    
]
var users = [
    {
        userID: 01,
        name: 'Nguyen Van A'
    },
    {
        userID: 02,
        name: 'Nguyen Van B'
    },
    {
        userID: 03,
        name: 'Nguyen Van C'
    }
    
]
var borrow = [
    {
        borrowID: 01,
        userID: 01,
        ISBN: 01,
        timeBorrow: 10
    }
]
var overdue = [
    {
        borrowID: 01,
        nOverdue: 2
    }
]