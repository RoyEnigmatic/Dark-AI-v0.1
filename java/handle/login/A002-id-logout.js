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

  document.getElementById("menu-popup").innerHTML += `
    <button onclick="logout()" style="
    background: #fff;">Đăng xuất</button>
`;