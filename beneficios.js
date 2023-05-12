const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
const scrollSection = document.querySelector('.beneficios__scroll--section');

buttonRight.addEventListener('click', () => {
  scrollSection.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
  buttonRight.classList.add("beneficios__button");

  buttonLeft.classList.remove("beneficios__button");
});

buttonLeft.addEventListener('click', () => {
  scrollSection.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
  buttonLeft.classList.add("beneficios__button");


  buttonRight.classList.remove("beneficios__button");
});



