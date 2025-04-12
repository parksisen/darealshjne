<?php
// Đường dẫn đến thư mục skins
$skins_directory = realpath(dirname(__FILE__)) . "/skins/";

// Kiểm tra thư mục skins
echo "Skins directory: " . $skins_directory . "<br>";

// Đọc danh sách các tệp hình ảnh trong thư mục skins
$files = glob($skins_directory . "*");

// Thời gian hiện tại
$current_time = time();

// Thời gian 30 ngày trước
$thirty_days_ago = $current_time - (30 * 24 * 60 * 60);

// Xoá các tệp hình ảnh cũ hơn 30 ngày
foreach ($files as $file) {
    $file_time = filemtime($file); // Thời gian sửa đổi của tệp
    echo "File: " . $file . " - File time: " . date("Y-m-d H:i:s", $file_time) . "<br>";
    if ($file_time < $thirty_days_ago) {
        unlink($file); // Xoá tệp
    }
}

echo "Script executed successfully.";
?>