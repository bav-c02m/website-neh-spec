// // Первый слайд
// let startPositionX = 0; 

// // Все слайды
// const tagsSlide = document.querySelectorAll('.slide'); 

// // Общее количество слайдов
// const totalSlides = tagsSlide.length; 

// // Получаем размеры контейнера .mid для учета padding и gap
// const container = document.querySelector('.mid');
// const containerWidth = container.clientWidth - (parseFloat(getComputedStyle(container).paddingLeft) + parseFloat(getComputedStyle(container).paddingRight));
// const slideWidth = tagsSlide[0].offsetWidth + parseFloat(getComputedStyle(container).gap); // ширина слайда с учетом gap

// // Следующий слайд
// function showNextSlide() {
//     // Переход (циклично)
//     startPositionX = (startPositionX + 1) % totalSlides; 
    
//     // Применяем смещение с учетом ширины контейнера и gap
//     const offset = -(startPositionX * slideWidth); 
    
//     // Применение смещения к каждому слайду
//     tagsSlide.forEach(slide => {
//         slide.style.transform = `translateX(${offset}px)`; 
//     });
// }

// // Каждые 7 секунд
// setInterval(showNextSlide, 7000);