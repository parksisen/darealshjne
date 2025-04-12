<?php
session_start(); // Đảm bảo session được khởi tạo

// Bao gồm tệp kết nối cơ sở dữ liệu
require_once '../app/db.php'; // Đảm bảo bạn đã có tệp db.php chứa mã kết nối DB

// Kiểm tra xem user_id đã được thiết lập trong session hoặc cookie chưa
$user_id = null;
if (isset($_SESSION['user'])) {
    // Nếu đã đăng nhập và có user_id trong session
    $user_id = $_SESSION['user']['id'];
} elseif (isset($_COOKIE['ajax_login_user'])) {
    // Nếu có user_id trong cookie
    $user_data = json_decode($_COOKIE['ajax_login_user'], true);
    $user_id = isset($user_data['id']) ? $user_data['id'] : null;
}

if ($user_id === null) {
    echo json_encode(['status' => 'error', 'message' => 'Bạn cần đăng nhập!']);
    exit; // Dừng mã nếu người dùng chưa đăng nhập
}

// Kiểm tra kết nối cơ sở dữ liệu
if ($db === null) {
    die("Không thể kết nối đến cơ sở dữ liệu.");
}

// Lấy số coins hiện tại của người dùng
$query = "SELECT coins FROM users WHERE id = :user_id";
$stmt = $db->prepare($query);
$stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    // Nếu tìm thấy người dùng, trả về số coins hiện tại
    echo json_encode(['status' => 'success', 'coins' => $user['coins']]);
} else {
    // Nếu không tìm thấy người dùng
    echo json_encode(['status' => 'error', 'message' => 'Không tìm thấy người dùng.']);
}
?>
