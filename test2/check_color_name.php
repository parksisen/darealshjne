<?php
// Kết nối tới cơ sở dữ liệu MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "game"; // Tên cơ sở dữ liệu của bạn

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Nhận ID người chơi từ yêu cầu
$userId = isset($_GET['userId']) ? (int)$_GET['userId'] : null;

// Kiểm tra nếu userId là hợp lệ
if ($userId === null) {
    echo json_encode(array('error' => 'Invalid user ID'));
    exit;
}

// Truy vấn cơ sở dữ liệu để lấy màu tên của người chơi
$sql = "SELECT color_name FROM player_color WHERE user_id = ?"; // Đổi thành user_id
$stmt = $conn->prepare($sql);

// Kiểm tra nếu câu lệnh SQL chuẩn bị thành công
if ($stmt === false) {
    // Nếu có lỗi, in ra lỗi của câu lệnh SQL
    echo json_encode(array('error' => 'SQL preparation failed: ' . $conn->error));
    exit;
}

$stmt->bind_param("i", $userId); // "i" cho integer
$stmt->execute();
$result = $stmt->get_result();

// Mặc định là màu trắng nếu không có dữ liệu
$response = array('color_name' => '#FFFFFF'); 

// Kiểm tra kết quả từ truy vấn
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $response['color_name'] = $row['color_name']; // Cập nhật màu nếu có
}

echo json_encode($response); // Trả về kết quả dưới dạng JSON

// Đóng kết nối
$stmt->close();
$conn->close();
?>
