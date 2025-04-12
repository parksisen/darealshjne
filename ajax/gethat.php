<?php
// Kết nối với cơ sở dữ liệu
require_once '../app/db.php';  // Đảm bảo rằng bạn có file db.php đã thiết lập kết nối CSDL

// Kiểm tra xem Player ID có được truyền không
if (!isset($_GET['player_id'])) {
    echo json_encode(["error" => "Player ID not provided"]);
    exit();
}

// Lấy Player ID từ yêu cầu GET
$player_id = $_GET['player_id'];

// Truy vấn cơ sở dữ liệu để lấy thông tin người chơi và mũ của họ
try {
    // Chuẩn bị câu lệnh SQL
    $query = $db->prepare("SELECT * FROM `player_hats` WHERE `player_id` = :player_id LIMIT 1");
    $query->bindParam(":player_id", $player_id, PDO::PARAM_INT);
    $query->execute();

    // Lấy thông tin về mũ
    $hat = $query->fetch(PDO::FETCH_ASSOC);

    if ($hat) {
        // Trả về hat_id cho client
        echo json_encode(["hat_id" => $hat["hat_id"]]);
    } else {
        // Nếu không có mũ cho người chơi
        echo json_encode(["error" => "No hat found"]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>
