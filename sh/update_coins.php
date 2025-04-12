<?php
// Khởi đầu phiên và kết nối CSDL
session_start();
include(__DIR__ . "/app/config.php");

// Lấy thông tin cần thiết từ phiên hoặc từ POST request
$user_id = $_SESSION['user_id']; // Giả sử user_id đã được lưu trong phiên

// Thực hiện cập nhật số coins (ví dụ: tăng số coins lên 1)
$conn->query("UPDATE `users` SET `coins` = `coins` + 1 WHERE `id` = {$user_id}");

// Lấy số coins mới sau khi cập nhật
$result = $conn->query("SELECT `coins` FROM `users` WHERE `id` = {$user_id}");
$new_coins = $result->fetch_assoc()['coins'];

echo $new_coins; // Trả về số coins mới
?>
s