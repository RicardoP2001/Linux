const heroScrollButton = document.querySelector(".main-hero button");
const timelineSection = document.querySelector(".timeline-section");

heroScrollButton.addEventListener("click", () => {
  timelineSection.scrollIntoView({ behavior: "smooth" });
});
