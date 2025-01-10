// document.addEventListener('DOMContentLoaded', function() {
//   const container = document.querySelector('.mid');
//   const slides = document.querySelectorAll('.slide');

//   container.addEventListener('scroll', function() {
//     slides.forEach(slide => {
//       const rect = slide.getBoundingClientRect();
//       const containerRect = container.getBoundingClientRect();
//       const slideCenter = rect.left + rect.width / 2;
//       const containerCenter = containerRect.left + containerRect.width / 2;

//       if (Math.abs(slideCenter - containerCenter) < rect.width / 2) {
//         slide.style.transform = 'translateX(0)';
//       } else {
//         slide.style.transform = 'translateX(0)';
//       }
//     });
//   });
// });