<?php
define("DB_SERVER", "localhost");
define("DB_NAME", "game");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "");


function getUserID() {
    // Kết nối đến cơ sở dữ liệu
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Kiểm tra kết nối
    if ($conn->connect_error) {
        die("Kết nối không thành công: " . $conn->connect_error);
    }

    // Lấy `id` của người dùng từ cơ sở dữ liệu
    if (isset($_SESSION["user"])) {
        $username = $_SESSION["user"]["username"];
        $query = $conn->prepare("SELECT id FROM users WHERE username = ?");
        $query->bind_param("s", $username);
        $query->execute();
        $result = $query->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $user_id = $row["id"];
        } else {
            $user_id = null; // Không tìm thấy người dùng trong cơ sở dữ liệu
        }
    } else {
        $user_id = null; // Người dùng chưa đăng nhập
    }

    // Đóng kết nối
    $conn->close();

    return $user_id;
}

session_start();
$user_id = getUserID();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if user session exists
    if (isset($_SESSION["user"])) {
        echo json_encode(array("is_login" => true, "user" => $_SESSION["user"]));
    } else {
        echo json_encode(array("is_login" => false, "user" => null));
    }
    die();
}

if ($user_id !== "false") {
    // Kết nối đến cơ sở dữ liệu
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Kiểm tra kết nối
    if ($conn->connect_error) {
        die("Kết nối không thành công: " . $conn->connect_error);
    }

    // Lấy tên người dùng từ cơ sở dữ liệu
    $query = $conn->prepare("SELECT username FROM users WHERE id = ?");
    $query->bind_param("i", $user_id);
    $query->execute();
    $result = $query->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $username = $row['username'];

        $query_transactions = $conn->prepare("SELECT * FROM `trans_log` WHERE `name` = ? ORDER BY `id` DESC LIMIT 10");
        $query_transactions->bind_param("s", $username);
        $query_transactions->execute();
        $result_transactions = $query_transactions->get_result();

     if ($result_transactions->num_rows > 0) {
    echo '<table class="table table-bordered blueTable">
            <thead>
                <tr bgcolor="4682B4" style="color:white">
                    <th scope="col">STT</th>
                    <th scope="col">Tên Game</th>
                    <th scope="col">Mệnh Giá</th>
                    <th scope="col">Thẻ</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Thời Gian </th>
                </tr>
            </thead>'; 

    $stt = 1; // Biến để đếm số thứ tự

    while ($row = $result_transactions->fetch_array()) {
        $status = '';
        if ($row['status'] == 1) {
            $status = '<span class="badge badge-success" style="font-size:100%;color:white;">Thành Công</span>';
        } elseif ($row['status'] == 2) {
            $status = '<span class="badge badge-danger" style="font-size:100%;color:white;">Thất Bại</span>';
        } elseif ($row['status'] == 3) {
            $status = '<span class="badge badge-info" style="font-size:100%;color:white;">Sai Mệnh Giá</span>';
        } else {
            $status = '<span class="badge badge-info" style="font-size:100%;color:white;">Chờ Duyệt</span>';
        }

        echo '<tr>
                <td>' . $stt . '</td>
				<td>' . $row['name'] . '</td>

                <td>' . number_format($row['amount']) . 'đ</td>
                <td>' . $row['type'] . '</td>
                <td>' . $status . '</td>
                <td>' . $row['date'] . '</td>
              </tr>';

        $stt++; // Tăng số thứ tự sau mỗi lần lặp
    }

    echo '</table>'; 
} else {
    echo '
        <tr>
            <td colspan="6" align="center"><span class="btn btn-success" style="font-size:100%;color:white;"><< Lịch Sử Trống >></span></td>
        </tr>
    ';
}

    } else {
        echo "Không tìm thấy thông tin người dùng.";
    }

    $conn->close();
} else {
    echo "Bạn chưa đăng nhập. Vui lòng đăng nhập để xem lịch sử.";
}
?>
