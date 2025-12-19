const slider = document.querySelector(".testimonial-slider");
const slides = document.querySelectorAll(".testimonial-slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
const total = slides.length;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % total;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % total;
  showSlide(index);
}, 5000);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
