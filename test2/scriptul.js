<script>
(() => {
    let e, t;
    $("#singleFileUploadInput").on("change", function () {
        const e = this.files[0],
            t = new FileReader(),
            n = document.getElementById("imagePreview");
        e
            ? ((t.onload = function (e) {
                  const t = new Image();
                  (t.src = e.target.result),
                      (t.onload = function () {
                          const t = document.createElement("img");
                          (t.src = e.target.result), (t.alt = "Ảnh xem trước"), (t.style.width = "512px"), (t.style.height = "512px"), (t.style.borderRadius = "50%"), (n.innerHTML = ""), n.appendChild(t);
                      });
              }),
              t.readAsDataURL(e))
            : (n.innerHTML = "");
    }),
        $("button.submit-btn").on("click", function (t) {
            t.preventDefault();
            const r = $("#singleFileUploadInput")[0];
            if (!r.files || !r.files.length) return alert("Vui lòng chọn file!");
            const a = r.files[0];
            if ("image/png" !== a.type) return alert("Chỉ hỗ trợ file PNG!");
            if (a.size > 5e6) return alert("Tối đa dung lượng file 5MB");
            const s = ((e) => {
                    const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    return Array.from({ length: e }, () => t.charAt(Math.floor(62 * Math.random()))).join("") + ".png";
                })(12),
                o = new FormData();
            o.append("skin", new File([a], s, { type: "image/png" })),
                o.append("user_id", e),
                (function (e) {
                    return new Promise((t, n) => {
                        $.ajax({
                            url: "/ajax/update_coins.php",
                            method: "GET",
                            data: { user_id: e },
                            dataType: "json",
                            success: function (e) {
                                "success" === e.status ? t(e.coins) : n(e.message);
                            },
                            error: function () {
                                n("Có lỗi xảy ra khi lấy thông tin số dư coin.");
                            },
                        });
                    });
                })(e)
                    .then((e) => {
                        e > 0 ? n(o) : alert("Không đủ lượt để upload!");
                    })
                    .catch((e) => {
                        alert(e);
                    });
        });
    const n = (e) => {
        $.ajax({
            url: "ajax/upload_skin.php",
            method: "POST",
            data: e,
            contentType: !1,
            processData: !1,
            success: (e) => {
                try {
                    if (JSON.parse(e).upload) {
                        alert("Uploads thành công...! ");
                        location.reload();
                    }
                } catch (e) {
                    console.error("Upload response error:", e);
                }
            },
            error: (e, t, n) => console.error("Upload error:", t, n),
        });
    };
    handleAuthenticate((n) => {
        n
            ? ($(".user-name").text(n.username),
              $(".user-coins").text(n.coins),
              $(".user-id").text("ID:"),
              $(".user-id").text(n.id),
              $(".user-coins").text("Bạn còn"),
              n.active_image_path && $(".user-skin").attr("src", n.active_image_path),
              (e = n.id),
              (t = n.coins),
              $.ajax({
                  url: "/ajax/update_coins.php",
                  type: "POST",
                  data: { user_id: e },
                  success: (e) => {
                      try {
                          const t = JSON.parse(e);
                          "success" === t.status ? $(".user-coins").text(t.coins) : console.error("Lỗi:", t.message);
                      } catch (e) {
                          console.error("JSON parse error:", e);
                      }
                  },
                  error: () => alert("Có lỗi khi lấy số coin."),
              }))
            : console.error("payload throw failed!");
    });
})();


</script>
