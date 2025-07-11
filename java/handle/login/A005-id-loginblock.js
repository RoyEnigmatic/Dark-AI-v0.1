function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error");
  const loginBox = document.querySelector(".login-box");

  // ✅ CHẶN ĐỂ TRỐNG
  if (!username || !password) {
    errorMsg.style.display = "block";
    showToast(`<img src="/img/svg/sign.svg" width="20" style="vertical-align: middle; margin-right: 6px;">Vui lòng nhập đầy đủ!`);
    loginBox.classList.add("shake");
    setTimeout(() => loginBox.classList.remove("shake"), 500);
    return;
  }

  // ✅ KIỂM TRA MẬT KHẨU ĐÚNG
  if (password === "03944") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    showMainUI(username);

    errorMsg.style.display = "none";
    showToast(`<img src="/img/svg/noti.svg" width="20" style="vertical-align: middle; margin-right: 6px;">Đăng nhập thành công!`);
  } else {
    // ❌ MẬT KHẨU SAI
    errorMsg.style.display = "block";
    loginBox.classList.add("shake");
    showToast(`<img src="/img/svg/sign.svg" width="20" style="vertical-align: middle; margin-right: 6px;">Mật khẩu sai rồi bro!`);
    setTimeout(() => loginBox.classList.remove("shake"), 500);
  }
}

function showMainUI(username) {
  const displayUsername = document.getElementById("username-display");
  if (displayUsername) {
    displayUsername.textContent = `Xin chào, ${username}!`;
  }

  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-content").style.display = "flex"; // flex nếu bạn dùng flex-layout

  // Show những phần thường bị ẩn
  const bgVid = document.getElementById("background-video");
  if (bgVid) bgVid.style.display = "block";

  const logo = document.getElementById("logo");
  if (logo) logo.style.display = "block";

  const discord = document.getElementById("discord-logo");
  if (discord) discord.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const username = localStorage.getItem("username");

  if (loggedIn && username) {
    showMainUI(username);
  }
});
