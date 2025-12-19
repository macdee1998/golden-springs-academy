
document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  const slides = heroSection.querySelectorAll(".hero-slides .slide");
  const prevBtn = heroSection.querySelector(".hero-nav .prev");
  const nextBtn = heroSection.querySelector(".hero-nav .next");

  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  let autoSlide = setInterval(nextSlide, 5000);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  }

  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  heroSection.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  heroSection.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetAutoSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetAutoSlide();
    }
  });

  // Initialize first slide
  showSlide(currentIndex);
});
