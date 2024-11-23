document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[aria-controls='mobile-menu']");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    // Toggle 'hidden' class on the mobile menu
    mobileMenu.classList.toggle("hidden");

    // Toggle the menu icon (burger vs close)
    const icons = menuButton.querySelectorAll("svg");
    icons.forEach((icon) => icon.classList.toggle("hidden"));
  });
});
