console.log('Hello World!');
// đăng nhập
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error");
  const loginBox = document.querySelector(".login-box");

  if (!username || !password) {
    errorMsg.style.display = "block";
    showToast(`<img src="/img/human-black.svg" width="20" style="vertical-align: middle; margin-right: 6px;">Vui lòng nhập đầy đủ!`);
    loginBox.classList.add("shake");
    setTimeout(() => loginBox.classList.remove("shake"), 500);
    return;
  }

  if (password === "03944") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    showMainUI(username);

    errorMsg.style.display = "none";
    showToast(`<img src="/img/noti.svg" width="20" style="vertical-align: middle; margin-right: 6px;">Đăng nhập thành công!`);
  } else {
    errorMsg.style.display = "block";
    loginBox.classList.add("shake");
    showToast(`<img src="/img/dead.svg" width="20" style="vertical-align: middle; margin-right: 6px;">Mật khẩu sai rồi bro!`);
    setTimeout(() => loginBox.classList.remove("shake"), 500);
  }
}

// block
function showMainUI(username) {
  const displayUsername = document.getElementById("username-display");
  if (displayUsername) {
    displayUsername.textContent = `Xin chào, ${username}!`;
  }

  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
  
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

// đăng xuất
function logout() {
  document.getElementById("login-container").style.display = "flex";
  document.getElementById("main-content").style.display = "none";
  document.getElementById("logo").style.display = "none";
  document.getElementById("discord-logo").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

window.onload = function () {
  document.getElementById("login-container").style.display = "flex";
  document.getElementById("main-content").style.display = "none";
  document.getElementById("logo").style.display = "none";
  document.getElementById("discord-logo").style.display = "none";
};

  window.addEventListener("DOMContentLoaded", () => {
  // Thêm nút đăng xuất sau khi DOM load xong
  const menuPopup = document.getElementById("menu-popup");
  if (menuPopup) {
    menuPopup.innerHTML += `
      <button onclick="logout()" style="background: #fff;">Đăng xuất</button>
    `;
  }
  
  // Phần auto-login nếu có
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const username = localStorage.getItem("username");
  
  if (loggedIn && username) {
    showMainUI(username);
  }
});

// menu select
const video = document.getElementById('background-video');
const soundBtn = document.getElementById('sound-btn');
const menu = document.getElementById('menu-popup');

function toggleMute() {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? 'ㅤ' : 'ㅤ';
  video.play();
}

function changeVideo(url) {
  video.src = url;
  video.style.display = 'block';
  document.body.style.background = 'none';
  video.load();
  video.play();
}

function changeImage(url) {
  video.pause();
  video.style.display = 'none';
  document.body.style.background = `url('${url}') no-repeat center center fixed`;
  document.body.style.backgroundSize = 'cover';
}

function toggleMenu() {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// thông báo
function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}