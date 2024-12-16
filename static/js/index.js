
const tracker = document.querySelector('.tracker');
const prevButt = document.querySelector('.prev');
const nextButt = document.querySelector('.next');
let slidePosition = 0;

function updateSlidePostion() {
    tracker.style.transform = `translateX(-${slidePosition * 100}%)`;
}

prevButt.addEventListener('click', () => {
    slidePosition = (slidePosition - 1 + tracker.children.length) % tracker.children.length;
    updateSlidePostion();
});


nextButt.addEventListener('click', () => {
    slidePosition = (slidePosition + 1) % tracker.children.length;
    updateSlidePostion();
});
