import { toggleMenu } from "./menuTogle.js";
import { initializeProjectList } from "./projectsList.js";

const menuBt = document.getElementById("checkbox");
menuBt.addEventListener("click", toggleMenu);

initializeProjectList();
