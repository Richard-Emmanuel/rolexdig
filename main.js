// const navContainer = document.querySelector(".nav-container");
const showMenu = document.querySelector(".hamburger");
const hideMenu = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");

// Configure scroll reveal
ScrollReveal({
  duration: 700,
  distance: "60px",
});

// Reveal animation settings
const revealAnimations = [
  { selector: "#header", options: { origin: "top", mobile: false } },
  { selector: ".values .section .value-img", options: { origin: "top" } },
  { selector: ".hero-text, .section > .heading", options: { origin: "left" } },
  {
    selector:
      ".hero-img, .services .section > .paragraph, .section > .paragraph",
    options: { origin: "right", delay: 200 },
  },
  { selector: ".trusted-img img", options: { origin: "top", interval: 200 } },
  {
    selector: ".line-container span, #services",
    options: { origin: "bottom", interval: 200 },
  },
  {
    selector: ".header .row div, .news .row a, .work .row div",
    options: { origin: "left", interval: 300 },
  },
  {
    selector: ".services .row div, .reviews .row div, .choose-us .row div",
    options: { origin: "left", interval: 300 },
  },
  {
    selector: ".plan-data-container",
    options: { origin: "right", delay: 300 },
  },
  {
    selector: ".cta .btn, .values .section .value-container",
    options: { origin: "bottom", delay: 300 },
  },
  {
    selector: ".newsletter, footer",
    options: { origin: "bottom", interval: 300 },
  },
];

// Reveal animations
revealAnimations.forEach(({ selector, options }) => {
  ScrollReveal().reveal(selector, options);
});

// Show/hide the navigation on mobile & tablet
showMenu.addEventListener("click", () => {
  navContainer.style.left = "0";
});

hideMenu.addEventListener("click", () => {
  navContainer.style.left = "-100%";
});

// Remove the menu upon clicking any nav-link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.style.left = "-100%";
  });
});
