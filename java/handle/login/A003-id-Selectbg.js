console.log('Hello World!');
//id Selectbackground
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