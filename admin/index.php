<?php
session_start();
include('../app/db.php');  // Kết nối cơ sở dữ liệu

// Kiểm tra nếu người dùng chưa đăng nhập hoặc không phải là admin
if (!isset($_SESSION['is_admin']) || $_SESSION['is_admin'] != 1) {
    // Nếu chưa đăng nhập hoặc không phải admin, chuyển hướng đến trang login
    header("Location: login.php");
    exit;
}

// Xác định số lượng người dùng trên mỗi trang
$users_per_page = 50;

// Lấy số trang hiện tại từ URL, nếu không có thì mặc định là trang 1
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;

// Tính toán giới hạn của SQL query (offset)
$offset = ($page - 1) * $users_per_page;

// Truy vấn tổng số người dùng
$total_query = "SELECT COUNT(*) FROM users";
$total_stmt = $db->prepare($total_query);
$total_stmt->execute();
$total_users = $total_stmt->fetchColumn();

// Truy vấn người dùng theo phân trang
$query = "SELECT id, username, coins, email FROM users LIMIT :offset, :limit";
$stmt = $db->prepare($query);
$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
$stmt->bindParam(':limit', $users_per_page, PDO::PARAM_INT);
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Tính số trang
$total_pages = ceil($total_users / $users_per_page);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản lý người chơi</title>
    <style>
       /* Toàn bộ trang */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    color: #333;
}

/* Header */
header {
    background-color: #D32F2F; /* Màu đỏ */
    color: white;
    padding: 15px 0;
    text-align: center;
}

h1 {
    margin: 0;
}

/* Menu */
.menu {
    background-color: #D32F2F; /* Màu đỏ */
    color: white;
    padding: 10px;
    text-align: center;
}

.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu li {
    display: inline;
    margin: 0 15px;
}

.menu a {
    color: white;
    text-decoration: none;
}

.menu a:hover {
    text-decoration: underline;
}

/* Container */
.container {
    width: 80%;
    margin: 20px auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    overflow: hidden;
    padding-bottom: 60px; /* Thêm padding dưới cùng để tránh che khuất phần phân trang */
}


form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

form label {
    font-size: 14px;
    color: #555;
}

form input[type="number"], form input[type="submit"] {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

form input[type="submit"] {
    background-color: #D32F2F; /* Màu đỏ */
    color: white;
    cursor: pointer;
}

form input[type="submit"]:hover {
    background-color: #C2185B; /* Màu đỏ đậm */
}

/* Table */
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #D32F2F; /* Màu đỏ */
    color: white;
}

tr:hover {
    background-color: #f1f1f1;
}

/* Pagination */
.pagination {
    text-align: center;
    padding: 10px;
}

.pagination a {
    margin: 0 5px;
    text-decoration: none;
    color: #D32F2F; /* Màu đỏ */
    font-weight: bold;
}

.pagination a:hover {
    color: #C2185B; /* Màu đỏ đậm */
}

/* Footer */
.footer {
    text-align: center;
    padding: 10px;
    background-color: #D32F2F; /* Màu đỏ */
    color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
    </style>
</head>
<body>

<header>
    <h1>DANGCAP.ONE ADMIN</h1>
</header>
<div class="menu">
    <ul>
        <li><a href="logout.php">Đăng xuất</a></li> <!-- Liên kết logout -->
    </ul>
</div>
<div class="container">
    


    <h3>Thêm lượt Uploads cho người dùng</h3>
    <form id="addCoinsForm">
        <label for="user_id">ID người dùng:</label>
        <input type="number" id="user_id" name="user_id" required><br><br>
        
        <label for="coins">Lượt Uploads cần thêm cần thêm:</label>
        <input type="number" id="coins" name="coins" required><br><br>
        
        <input type="submit" value="OKE...!">
    </form>

    <div id="message"></div>
<center><h2>Danh sách người dùng</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên người dùng</th>
                <th>Lượt Uploads</th>
                <th>Gmail</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($users as $user): ?>
                <tr>
                    <td><?php echo htmlspecialchars($user['id']); ?></td>
                    <td><?php echo htmlspecialchars($user['username']); ?></td>
                    <td><?php echo htmlspecialchars($user['coins']); ?></td>
                    <td><?php echo htmlspecialchars($user['email']); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <!-- Phân trang -->
    <div class="pagination">
        <?php if ($page > 1): ?>
            <a href="?page=1">Trang đầu</a>
            <a href="?page=<?php echo $page - 1; ?>">Trang trước</a>
        <?php endif; ?>

        <?php if ($page < $total_pages): ?>
            <a href="?page=<?php echo $page + 1; ?>">Trang sau</a>
            <a href="?page=<?php echo $total_pages; ?>">Trang cuối</a>
        <?php endif; ?>
    </div>
</div>

<div class="footer">
    <p>&copy; 2025 Quản lý người chơi - Tất cả quyền được bảo lưu.</p>
</div>

<script>
document.getElementById('addCoinsForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'add_coins.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            
            alert(xhr.responseText);  
        }
    };

    xhr.send(formData);
});
</script>

</body>
</html>
