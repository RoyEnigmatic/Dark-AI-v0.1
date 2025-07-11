const btn = document.querySelector('.menu-button');
  
  btn.addEventListener('touchstart', () => {
    btn.classList.add('pressed');
  });

  btn.addEventListener('touchend', () => {
    btn.classList.remove('pressed');
  });