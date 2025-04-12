<?php
// /app/check_user_owns_skin.php

require_once '../app/config.php';


function check_user_owns_skin($user_id, $path) {
    global $db;

    // Perform a database query to check if the user owns the skin
    $query = "SELECT COUNT(*) AS count FROM images WHERE user_id = :user_id AND path = :path";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);
    $stmt->bindParam(":path", $path, PDO::PARAM_STR);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    return $row["count"] > 0;
}

// Thêm kiểm tra request method và thực hiện xử lý nếu là POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST["user_id"]) && isset($_POST["path"])) {
        $user_id = $_POST["user_id"];
        $path = $_POST["path"];

        $is_owned = check_user_owns_skin($user_id, $path);
        echo $is_owned ? "true" : "false";
    } else {
        // Invalid request, missing parameters
        echo "false";
    }
} else {
    // Invalid request method
    echo "false";
}
?>