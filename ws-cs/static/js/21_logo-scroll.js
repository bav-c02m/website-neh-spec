
function logoScroll(event) {
  const scrollCont = document.querySelector('.scroll-x');
  const firstCont = document.getElementById('teacher');
  scrollCont.scrollLeft = firstCont.offsetLeft;
}