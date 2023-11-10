
function login() {
    if (username.value == "守夜人" && pwd.value == "11111") {
        msg2.style.display = "block";
        msg.innerText = "登录成功";
        msg.style.display = "none";
        setTimeout(function () {
            window.location.href = "../Hello world/my.html";
        }, 1000);

    } else {
        msg.style.display = "block";
        msg.innerText = "账号密码错误"
    }
}    