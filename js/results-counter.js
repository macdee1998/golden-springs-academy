const counters = document.querySelectorAll(".counter");
let started = false;

function startCounting() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 120;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

const resultsSection = document.querySelector(".results");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        startCounting();
        started = true;
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(resultsSection);
