
function scrollFunc() {
  const scrollCont = document.querySelector('.scroll-x');
  const secondSlide = document.getElementById('scroll');
  scrollCont.scrollLeft = secondSlide.offsetLeft;
}