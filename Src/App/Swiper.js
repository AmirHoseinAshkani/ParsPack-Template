var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: " .mySwiper .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
