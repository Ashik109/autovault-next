import type { SwiperOptions } from "swiper/types";
export const sliderOptions: Record<string, SwiperOptions> = {
  ".category-slider": {
    spaceBetween: 30,
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".categorySlider2": {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".category-slider2": {
    spaceBetween: 25,
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination-5",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".projectSlider": {
    spaceBetween: 50,
    slidesPerView: 2.2,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 2.2,
      },
      1199: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".projectSlider2": {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  },
  ".projectSlider3": {
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination-5",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".projectSlider4": {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
  ".featureSlider": {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    speed: 1500,
    pagination: {
      el: ".swiper-pagination-3",
      clickable: true,
    },
  },
  ".bannerSlider": {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    speed: 1500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  ".bannerSlider2": {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  ".testimonialSlider": {
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination-4",
      clickable: true,
    },
  },
  ".testimonialSlider2": {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination-4",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1199: {
        centeredSlides: false,
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".blogSlider": {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination-5",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".rts-testimonialSlider3": {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1800,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  ".rts-imageSlider": {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1800,
    loop: true,
  },
  ".rts-swiper-activation-6": {
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination-5",
      clickable: true,
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  ".SlideThumb": {
    spaceBetween: 0,
    slidesPerView: 6,
    mousewheel: true,
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".thumb-next",
      prevEl: ".thumb-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 6,
      },
      1199: {
        slidesPerView: 6,
      },
      991: {
        slidesPerView: 6,
      },
      767: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 4,
      },
      0: {
        slidesPerView: 4,
      },
    },
  },
  ".rts-heroSlider": {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1500,
    grabCursor: true,
    autoplay: false,
    loop: true,
  },
  ".SlideThumb2": {
    direction: false ? "horizontal" : "vertical",
    spaceBetween: 0,
    slidesPerView: false ? 4 : 6,
    mousewheel: !false,
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".thumb-next",
      prevEl: ".thumb-prev",
    },
  },
  ".rts-heroSlider2": {
    slidesPerView: 1,
    effect: "fade",
    spaceBetween: 0,
    speed: 1500,
    grabCursor: true,
    autoplay: false,
    loop: true,
  },
  ".rts-imgSliderBig": { slidesPerView: 1, speed: 1000, effect: "fade" },
  ".rts-imgSliderSmall": { slidesPerView: 1, speed: 1000, effect: "fade" },
};
