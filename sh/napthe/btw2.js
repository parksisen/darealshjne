Array.from(document.querySelectorAll("font")).forEach((item) => item.style.color = "#000")
const handleCheckAuthenticate = () => {
    // send a request to check is login?
    // if login success call load user!
    $.ajax({
        method: "POST",
        url: "./ajax/check_authenticate.php",
        success: (res) => {
            handleLoadUserInfo(JSON.parse(res).user)
        },
        error: (err) => {
            alert("Opps!Something wrong!")
            //    you can reload page here!
        }
    })
}


const handleAuthenticate = (callback)=>{
    // send a request to check is login?
    // if login success call load user!
    $.ajax({
        method: "POST",
        url: "./ajax/check_authenticate.php",
        success: (res) => {
            res = JSON.parse(res)
            if (res.is_login){
                callback(res.user)
            }else {
                alert("Vui lòng đăng nhập!")
                window.location.assign(window.location.href.slice(0,window.location.href.indexOf("/napthe.php")))
				               

            }
        },
        error: (err) => {
            alert("Opps!Something wrong!")
            //    you can reload page here!
        }
    })
}



const handleLoadUserInfo = (user) => {
    //    load data to dialog
    let userDialog = document.getElementById("user-info-dialog")
    let username = document.querySelector("#user-info-dialog .user-name")

    let id = document.querySelector("#user-info-dialog .user-id")

    let btnLogin = document.getElementById("btnLogin")
    let settingBtn = document.getElementById("settings-btn")
    let settingBtnOn = document.getElementById("settings-btn-on")
    let coins = document.querySelector(".user-coins")
    // settingBtnOn.style.display = "none"
    if (user) {
        console.log(user)
        username.textContent = user.username;

        coins.textContent = ":" + user.coins
    } else {
        userDialog.style.display = "none"
        nick.value = ""
        
    }

}

// handleCheckAuthenticate()

function logout() {
    $.post("logout.php", [], function (data) {
        if (data) {
            window.location.assign(window.location.href)
        }
    })
}


