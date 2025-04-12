<?php
// get_user_id.php

require_once '../app/config.php';

// Thêm kiểm tra request method và thực hiện xử lý nếu là POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Gửi yêu cầu AJAX để kiểm tra xem người dùng đã đăng nhập chưa và lấy `user_id` từ session hoặc cookie
    $user_id = null;
    if (isset($_SESSION["user"])) {
        // Nếu đã đăng nhập và có `user_id` trong session
        $user_id = $_SESSION["user"]["id"];
    } elseif (isset($_COOKIE["ajax_login_user"])) {
        // Nếu có `user_id` trong cookie, chuyển đổi giá trị từ chuỗi JSON thành mảng
        $user_data = json_decode($_COOKIE["ajax_login_user"], true);
        $user_id = isset($user_data["id"]) ? $user_data["id"] : null;
    }

    // Trả về `user_id` dưới dạng chuỗi (string)
    echo strval($user_id);
} else {
    // Invalid request method
    echo "false";
}
?>