const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
const scrollSection = document.querySelector('.cardsSlider__carousel');

buttonRight.addEventListener('click', () => {
  scrollSection.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
  buttonRight.classList.add("btnCircle--inactive");

  buttonLeft.classList.remove("btnCircle--inactive");
});

buttonLeft.addEventListener('click', () => {
  scrollSection.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
  buttonLeft.classList.add("btnCircle--inactive");


  buttonRight.classList.remove("btnCircle--inactive");
});



