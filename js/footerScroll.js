const footerScrollButton = document.querySelector("#footerScrollButton");

footerScrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
