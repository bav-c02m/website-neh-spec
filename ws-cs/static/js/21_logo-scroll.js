
function logoScroll(event) {
  const scrollCont = document.querySelector('.scroll-x');
  const firstCont = document.getElementById('first');
  scrollCont.scrollLeft = firstCont.offsetLeft;
}