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
