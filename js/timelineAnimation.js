const timelineSection = document.querySelector(".timeline-section");

const listEls = document.querySelectorAll(
  ".timeline ul li:nth-child(odd), .timeline ul li:nth-child(even)"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

listEls.forEach((el) => observer.observe(el));
