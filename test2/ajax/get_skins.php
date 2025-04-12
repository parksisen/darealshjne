<?php

$user_id = $_POST["user_id"];

require_once "../app/db.php";

$query = $db->prepare("SELECT path,expire_at,active_image_path from images  join users on users.id = ? where user_id = ? AND expire_at >= NOW()");
$query->execute([$user_id,$user_id]);
$result = array();

$query_result = $query->fetchAll();
for ($i = 0 ; $i < count($query_result) ; $i++){
    // Giảm đi 1 ngày từ expire_at
    $expire_date = date_create($query_result[$i]["expire_at"]);
    date_modify($expire_date, "-1 day");
    $query_result[$i]["expire_at"] = date_format($expire_date, "Y-m-d H:i:s");

    // Tính toán số ngày còn lại
    $still_date = strtotime($query_result[$i]["expire_at"]) - strtotime(date("Y-m-d H:i:s"));
    $query_result[$i]["still_day"] = date("d", $still_date);
}

echo json_encode($query_result);
die();
