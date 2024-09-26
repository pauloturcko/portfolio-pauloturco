import { toggleMenu } from "./menuTogle.js";
import { initializeProjectList } from "./projectsList.js";
import { scrollToSection } from "./scrollLinksInternos.js";
import { scrollAnime } from "./scrollAnimation.js";

const menuBt = document.getElementById("checkbox");
menuBt.addEventListener("click", toggleMenu);
// menuBt.addEventListener("click", animationMenu);

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

window.addEventListener('scroll', scrollAnime)
scrollAnime();

initializeProjectList();