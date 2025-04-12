<?php
include(__DIR__ . "/api/config.php");

$validate = ValidateCallback($_POST);

if ($validate != false) { // Nếu xác thực callback đúng thì chạy vào đây.
    $status = $validate['status']; // Trạng thái thẻ nạp, thẻ thành công = thanhcong , Thẻ sai, thẻ sai mệnh giá = thatbai
    $serial = $validate['serial']; // Số serial của thẻ.
    $pin = $validate['pin']; // Mã pin của thẻ.
    $card_type = $validate['card_type']; // Loại thẻ. vd: Viettel, Mobifone, Vinaphone.
    $amount = $validate['amount']; // Mệnh giá của thẻ. nếu bạn sài thêm hàm sai mệnh giá vui lòng sử dụng thêm hàm này tự cập nhật mệnh giá thật kèm theo desc là mệnh giá củ
    $real_amount = $validate['real_amount']; // thực nhận đã trừ chiết khấu
    $content = $validate['content']; // id transaction
    $result = $conn->query("SELECT * FROM `trans_log` WHERE status = 0 AND trans_id = '{$content}' AND pin = '{$pin}' AND seri = '{$serial}' AND type = '{$card_type}'");

    if ($result->num_rows > 0) {
        $result = $result->fetch_array(MYSQLI_ASSOC);

        if ($status == 'thanhcong') {
            $coins_to_add = 0; // Khởi tạo số coins cần thêm

            // Dựa vào mệnh giá của thẻ, thêm số coins tương ứng
            switch ($amount) {
                case 10000:
                    $coins_to_add = 1;
                    break;
                case 20000:
                    $coins_to_add = 2;
                    break;
                case 30000:
                    $coins_to_add = 3;
                    break;
                case 50000:
                    $coins_to_add = 5;
                    break;
                case 100000:
                    $coins_to_add = 11;
                    break;
                case 200000:
                    $coins_to_add = 13;
                    break;
                case 500000:
                    $coins_to_add = 53;
                    break;
                default:
                    // Xử lý mệnh giá không hợp lệ (nếu cần)
                    break;
            }

            // Lấy thông tin người dùng từ tên người dùng
            $username = $result['name'];
            $user_result = $conn->query("SELECT * FROM `users` WHERE `username` = '{$username}'");
            $user_data = $user_result->fetch_array(MYSQLI_ASSOC);

            if ($user_result->num_rows > 0) {
                // Cập nhật số coins vào CSDL
                $new_coins = $user_data['coins'] + $coins_to_add;
                $conn->query("UPDATE `users` SET `coins` = $new_coins WHERE `username` = '{$username}'");

                // Đánh dấu giao dịch là thành công
                $conn->query("UPDATE `trans_log` SET `status` = 1 WHERE `id` = {$result['id']}");
            } else {
                // Xử lý trường hợp không tìm thấy người dùng (nếu cần)
            }
        } elseif ($status == 'saimenhgia') {
            // Xử lý nạp thẻ sai mệnh giá tại đây.
            $conn->query("UPDATE `trans_log` SET status = 3, `amount` = {$amount} WHERE `id` = {$result['id']}"); // thất bại   
        } else {
            // Xử lý nạp thẻ thất bại tại đây.
            $conn->query("UPDATE `trans_log` SET status = 2 WHERE `id` = {$result['id']}"); // thất bại   
        }

        # Lưu log Nạp Thẻ 
        $file = "card.log";
        $fh = fopen($file, 'a') or die("cant open file");
        fwrite($fh, "Tai khoan: " . $result['name'] . ", data: " . json_encode($_POST));
        fwrite($fh, "\r\n");
        fclose($fh);
    }
}

function ValidateCallback($out) { // Hàm kiểm tra callback từ sever
    if (isset(
        $out['status'],
        $out['serial'],
        $out['pin'],
        $out['card_type'],
        $out['amount'],
        $out['content'],
        $out['real_amount']
    )) {
        return $out; // Xác thực thành công, return mảng dữ liệu từ sever trả về.
    } else {
        return false; // Xác thực callback thất bại.
    }
}
?>
