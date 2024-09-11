import { toggleMenu } from "./menuTogle.js";
import { keepHoverOnProjectName } from "./projectsList.js";

const menuBt = document.getElementById("checkbox");
menuBt.addEventListener("click", toggleMenu);

keepHoverOnProjectName.addEventListener("click", keepHoverOnProjectName);
