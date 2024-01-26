const heroSwiper = new Swiper(".hero__slider", {
  pagination: {
    el: ".hero__slider-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return `<span class="${className} hero__slider-pagination-bullet"></span>`;
    },
  },

  autoplay: {
    delay: 15000,
  },

  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1500,
});

const worksSwiper = new Swiper(".works__slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  // loopAddBlankSlides: true,
  loopPreventsSliding: false,
  // autoplay: {
  //   delay: 1000,
  // },
  // speed: 100,

  // Navigation arrows
  loop: true,
  navigation: {
    nextEl: ".works__slider-button-next",
    prevEl: ".works__slider-button-prev",
  },
});
