const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector("#nav-panel");
const navLinks = document.querySelectorAll(".nav-link, .nav-cta");
const mobileBreakpoint = window.matchMedia("(max-width: 760px)");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  navPanel.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("click", (event) => {
  if (
    mobileBreakpoint.matches &&
    menuToggle.getAttribute("aria-expanded") === "true" &&
    !navPanel.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

mobileBreakpoint.addEventListener("change", (event) => {
  if (!event.matches) {
    setMenuOpen(false);
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
