var buttonUp = document.querySelector('.buttonUp');

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    buttonUp.classList.add('show');
  } else {
    buttonUp.classList.remove('show');
  }
});