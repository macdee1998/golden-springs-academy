document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".testimonial-slider");
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(
    ".testimonials .testimonial-nav .prev"
  );
  const nextBtn = document.querySelector(
    ".testimonials .testimonial-nav .next"
  );

  if (!sliderContainer || slides.length === 0 || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideWidth = 100;

  const updateSlider = () => {
    sliderContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  };

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  let autoSlide = setInterval(nextSlide, 6000);

  const resetInterval = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 6000);
  };

  nextBtn.addEventListener("click", resetInterval);
  prevBtn.addEventListener("click", resetInterval);

  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  sliderContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetInterval();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetInterval();
    }
  });

  // Initialize
  updateSlider();
});
