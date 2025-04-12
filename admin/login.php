<?php
session_start();
include('../app/db.php');

// Kiểm tra nếu người dùng đã đăng nhập rồi thì chuyển hướng về trang admin
if (isset($_SESSION['is_admin']) && $_SESSION['is_admin'] == 1) {
    header("Location: index.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kiểm tra tài khoản và mật khẩu
    $query = "SELECT * FROM test WHERE username = :username";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // Nếu đăng nhập thành công và là admin
        if ($user['is_admin'] == 1) {
            $_SESSION['is_admin'] = 1;
            $_SESSION['username'] = $username;
            header("Location: index.php");
            exit;
        } else {
            $error_message = "Bạn không phải là admin!";
        }
    } else {
        $error_message = "Thông tin đăng nhập không chính xác!";
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        /* CSS cho giao diện đăng nhập */
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .login-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }

        .error-message {
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid #f5c6cb;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .error-message i {
            margin-right: 10px;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }

        .footer p {
            font-size: 14px;
        }

        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        /* CSS căn giữa */
        .center-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            text-align: center;  /* Căn giữa nội dung trong form */
        }
    </style>
</head>
<body>
    <div class="center-wrapper">
        <div class="login-container">
            <h2>Đăng nhập vào hệ thống</h2>

            <!-- Hiển thị thông báo lỗi nếu có -->
            <?php if (isset($error_message)): ?>
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i> <!-- Biểu tượng lỗi -->
                    <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form action="login.php" method="POST">
                <input type="text" id="username" name="username" placeholder="Tên đăng nhập" required><br>
                <input type="password" id="password" name="password" placeholder="Mật khẩu" required><br>
                <input type="submit" value="Đăng nhập">
            </form>

            <div class="footer">
                <p>&copy; 2025 Quản lý người chơi - Tất cả quyền được bảo lưu.</p>
            </div>
        </div>
    </div>
</body>
</html>
