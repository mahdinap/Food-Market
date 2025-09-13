    const swiper = new Swiper('.category-carousel', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop:true,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        992: { slidesPerView: 5 },
      },
    });

    const swiperTwo = new Swiper(".category-carouselTwo", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 800,
});

const swiperThree = new Swiper(".category-carouselThree", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  },
  
});


window.addEventListener('load', function() {
  const loader = document.getElementById('page-loader');
  loader.style.opacity = '1';
  setTimeout(() => {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
  }, 300);
});

