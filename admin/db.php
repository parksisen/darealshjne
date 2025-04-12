<?php
include_once '/app/config.php';

class DB {
    // Hàm lấy danh sách người dùng và số dư coin của họ
    public function getUsersAndCoins() {
        global $conn;
        // Truy vấn lấy thông tin người dùng cùng với số dư coin
        $query = "
            SELECT users.id, users.username, users.email, IFNULL(user_coins.coins, 0) AS coins 
            FROM users
            LEFT JOIN user_coins ON users.id = user_coins.user_id
        ";
        $result = $conn->query($query);
        
        $users = [];
        while($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
        return $users;
    }

    // Các phương thức khác như thêm, xóa người dùng vẫn có thể giữ nguyên
}
?>
