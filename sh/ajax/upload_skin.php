<?php
session_start();
error_reporting(1);
$skin_upload = $_FILES["skin"]["tmp_name"];
$filename = $_FILES["skin"]["name"];
$dir_path = realpath(dirname(getcwd())) . "/skins/" . $filename;

$user_id = (int)$_POST["user_id"];

require_once "../app/db.php";

$user_coins = $db->prepare("SELECT coins FROM users WHERE id = :user_id");

try {
    $user_coins->execute(array(
        ":user_id" => $user_id
    ));

    $db_coins = (int)$user_coins->fetch()["coins"];

    if ($db_coins <= 0) {
        echo json_encode(array("upload" => false, "error" => "Không đủ coins để tải lên ảnh."));
        exit();
    }

    $coins = max($db_coins - 1, 0);

    if (move_uploaded_file($skin_upload, $dir_path)) {
        $create_image = $db->prepare("INSERT INTO images(path,user_id,expire_at) VALUES (:path,:user_id,DATE_ADD(NOW(),INTERVAL 1 MONTH))");
        try {
            $create_image->execute(array(
                ":path" =>"./skins/" . $filename,
                ":user_id" => $user_id,
            ));

            $update_coins = $db->prepare("UPDATE users SET coins = ? WHERE id = ?");
            $update_coins->execute([$coins,$user_id]);

            $_SESSION["user"]["coins"] = $coins;

            echo json_encode(array("upload" => true));
            exit();
        } catch (Exception $ex) {
            echo json_encode(array("upload" => false, "error" => $ex->getMessage()));
            exit();
        }
    } else {
        echo json_encode(array("upload" => false, "error" => "Không thể tải lên ảnh."));
        exit();
    }
} catch (Exception $exception){
    echo json_encode(array("upload" => false, "error" => $exception->getMessage()));
    exit();
}
?>
