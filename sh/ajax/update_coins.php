<?php
require_once '../app/config.php';

session_start();

$userId = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Kết nối đến cơ sở dữ liệu
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    // Kiểm tra kết nối
    if ($conn->connect_error) {
        die("Kết nối không thành công: " . $conn->connect_error);
    }

    // Truy vấn cơ sở dữ liệu để lấy số tiền của người dùng
    $sql = "SELECT coins FROM users WHERE id = $userId";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Lấy số tiền từ kết quả truy vấn
        $row = $result->fetch_assoc();
        $coins = $row['coins'];

        // Trả về số tiền dưới dạng JSON
        echo json_encode(['coins' => $coins]);

        // Đóng kết nối cơ sở dữ liệu
        $conn->close();
    } else {
        echo json_encode(['error' => 'Người dùng không tồn tại']);
    }
} else {
    // Invalid request method
    echo json_encode(['error' => 'Yêu cầu không hợp lệ']);
}
?>
s