// // Первый слайд
// let startPositionX = 0; 

// // Все слайды
// const tagsSlide = document.querySelectorAll('.slide'); 

// // Общее количество слайдов
// const totalSlides = tagsSlide.length; 

// // Следующий слайд
// function showNextSlide() {
//     // Переход (циклично)
//     startPositionX = (startPositionX + 1) % totalSlides; 
    
//     // В процентах
//     const offset = -startPositionX * 100; 
    
//     // Применение смещения к каждому слайду
//     tagsSlide.forEach(slide => {
//         slide.style.transform = `translateX(${offset}%)`; 
//     });
// }

// // Каждые 7 секунд
// setInterval(showNextSlide, 7000); 