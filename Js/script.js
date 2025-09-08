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

