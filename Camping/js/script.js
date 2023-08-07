const navMenu = document.querySelector(".navMenu");
const navToggle = document.querySelector(".navToggle");
const navClose = document.querySelector(".navClose");

navToggle.onclick = () => {
  navMenu.classList.add("show-menu");
};
navClose.onclick = () => {
  navMenu.classList.remove("show-menu");
};

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.querySelector(".navMenu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const bgHeader = () => {
  const header = document.querySelector(".header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
//GSAP
gsap.from(".home-img-4", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home-img-2", 1.2, { opacity: 0, y: 200, delay: 0.2 });
gsap.from(".home-img-3", 1.2, { opacity: 0, y: 200, delay: 0.4 });
gsap.from(".home-data", 1.2, { opacity: 0, y: -60, delay: 0.6 });
gsap.from(".home-bird-1", 1.2, { opacity: 0, x: -80, delay: 0.9 });
gsap.from(".home-bird-2", 1.2, { opacity: 0, x: 80, delay: 1.1 });
gsap.from(".home-img-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
