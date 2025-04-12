<!DOCTYPE html>
   <html>

      <head>
		<meta charset="UTF-8">
		<title>Nạp thẻ</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
	    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
		<link rel="stylesheet" href="https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css">
		<script src='https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js'></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.6/css/mdb.min.css" />
		<link rel="stylesheet" href="https://cdn.rawgit.com/t4t5/sweetalert/v0.2.0/lib/sweet-alert.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" crossorigin="anonymous">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" />
		<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
	</head>
  <body>
      <script type="text/javascript"> new WOW().init(); </script>
        <div class="container">
		
	       <a href="https://dangcap.one" target="_blank"><img src="" width="40%" align="center" alt="" /></a></br>
		   <div id="status"></div>
		<div class="row" style="margin-top: 30px;">
			<div class="col-md-5">
				<form method="POST" action="#" id="myform">
				
				   <table class="table table-condensed table-bordered">
				   
				     <tbody>
					 <tr bgcolor="4682B4">
					     <td colspan="2" align="center"><h3 style="color:white;">DONATE</h3> </td>
					 </tr>
					 <tr>
						<td><label>Username:</label></td>
						
					<td><input type="text" value="" class="form-control user-name" name="username" required readonly></td>

					</tr>
					<tr>
						<td><label>Loại thẻ:</label></td>
						<td><select class="form-control" name="card_type" required>
							<option value="">Chọn loại thẻ</option>
							 <?php 
							 
							 
	                    $cdurl = curl_init("https://thesieutoc.net/card_info.php"); 
                       	curl_setopt($cdurl, CURLOPT_FAILONERROR, true); 
	                    curl_setopt($cdurl, CURLOPT_FOLLOWLOCATION, true); 
	                    curl_setopt($cdurl, CURLOPT_RETURNTRANSFER, true); 
						curl_setopt($cdurl,CURLOPT_CAINFO, __DIR__ .'/api/curl-ca-bundle.crt');
						curl_setopt($cdurl,CURLOPT_CAPATH, __DIR__ .'/api/curl-ca-bundle.crt');
	                    $obj = json_decode(curl_exec($cdurl), true); 
	                    curl_close($cdurl);
						$length = count($obj);
						for ($i = 0; $i < $length; $i++) {
							if ($obj[$i]['status'] == 1){
								echo '<option value="'.$obj[$i]['name'].'">'.$obj[$i]['name'].' </option> ';
							}
						}
							?>
						</select></td>
					</tr>
					<tr>
						<td><label>Mệnh giá:</label></td>
						<td><select class="form-control" name="card_amount" required>
							<option value="">Chọn mệnh giá</option>
							<option value="10000">10.000</option>
							<option value="20000">20.000</option>
							<option value="30000">30.000 </option>
							<option value="50000">50.000</option>
							<option value="100000">100.000</option>
							<option value="200000">200.000</option>
							<option value="300000">300.000</option>
							<option value="500000">500.000</option>
						  
						</select></td>
					</tr>
					<tr>
						<td><label>Số seri:</label></td>
						<td><input type="text" class="form-control" name="serial" required /></td>
					</tr>
					<tr>
						<td><label>Mã thẻ:</label></td>
						<td><input type="text" class="form-control" name="pin" required /></td>
					</tr>
					<tr>
						<td colspan="2" align="center"><button type="submit" class="btn btn-success btn-block" name="submit">Gửi Thẻ</button></td>
					</tr>
					</tbody>
				</table>	
				</form>
				<script src="./btw.js"></script>

				<script type="text/javascript">
				alert('Khi nap the thanh cong , vui long dang xuat va dang nhap lai')
			document.addEventListener('DOMContentLoaded', function () {
    let userNameInput = document.querySelector('.user-name');

    const handleLoadUserUi = (user) => {
        if (user) {
            userNameInput.value = user.username;
			console.log(user)

        } else {
            console.log("payload throw failed!")
        }
    }

     function checkAuthentication() {
        $.ajax({
            method: "POST",
            url: "ajax/check_authenticate.php",
            success: function(res) {
                res = JSON.parse(res);
                if (!res.is_login) {
                    alert("Vui lòng đăng nhập!");
                    window.location.assign(window.location.href.slice(0, window.location.href.indexOf("/uploads.html")));
                }
            },
            error: function(err) {
                alert("Có lỗi xảy ra!");
                // ở đây bạn có thể xử lý lỗi
            }
        });
    }

    // Kiểm tra mỗi 5 giây (5000 milliseconds)
    setInterval(checkAuthentication, 10);
    

    handleAuthenticate(handleLoadUserUi);

    $("#myform").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "./ajax/card.php",
            type: 'post',
            data: $("#myform").serialize(),
            success: function (data) {
                $("#status").html(data);
                document.getElementById("myform").reset();
                $("#load_hs").load("./ajax/history.php");
            }
        });
    });
});


    
</script>
			</div>
		<div class="col-md-7">
		     <h4 class="text-center"></h4>
			    <div class="panel-body">
          

                    </div>
    <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Lịch Sử Ủng Hộ
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion" >
      <div id="load_hs" class="card-body table-responsive">
		
	  </div>
	  <script>
		$("#load_hs").load("./ajax/history.php");
		setInterval(function(){
		$("#load_hs").load("./ajax/history.php");
		},10000);
		</script>
    </div>
  </div>
</div>  
      <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Thông Báo Khẩn Cấp !
        </button>
      </h5>
    </div>

    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body table-responsive">
	      <p></p>
        </div>
    </div>
  </div>
  <br>
		   <span class="badge badge-danger" style="margin-left:3%;">LƯU Ý : PHẢI DỂ Ý PHẦN USERNAME ( TÊN CỦA BẠN ) KHÔNG ĐƯỢC ĐỂ TRÔNG,
		   <BR>NẾU KHÔNG CÓ TÊN VUI LÒNG F5 LẠI TRANG WEB
		   <BR> XIN LỖI VÌ SỰ BẤT TIỆN NÀY , CHÚNG TÔI SẼ KHẮC PHỤC SỚM NHẤT</span>

    
  </div>
          
			 </div>
		</div>
	</div>
</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
        </body>	
</html>		
