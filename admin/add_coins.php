<?php
// Kết nối với cơ sở dữ liệu
include('../app/db.php');

// Kiểm tra nếu form được submit
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_POST['user_id'];
    $coins_to_add = $_POST['coins'];

    try {
        // Truy vấn lấy số coins hiện tại của người chơi
        $query = "SELECT coins FROM users WHERE id = :user_id";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // Cập nhật số coins mới
            $new_coins = $user['coins'] + $coins_to_add;
            $update_query = "UPDATE users SET coins = :new_coins WHERE id = :user_id";
            $update_stmt = $db->prepare($update_query);
            $update_stmt->bindParam(':new_coins', $new_coins, PDO::PARAM_INT);
            $update_stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
            $update_stmt->execute();

            echo "Đã thêm {$coins_to_add} coins cho người chơi với ID: {$user_id}. Số coins mới: {$new_coins}.";
        } else {
            echo "Không tìm thấy người chơi với ID: {$user_id}.";
        }
    } catch (PDOException $e) {
        echo "Lỗi: " . $e->getMessage();
    }
} else {
    echo "Vui lòng nhập thông tin người chơi và số coins cần thêm.";
}
?>
