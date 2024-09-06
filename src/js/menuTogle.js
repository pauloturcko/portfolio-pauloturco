const contentMenu = document.getElementById("menu");

function toggleMenu() {
  if (contentMenu.style.visibility === "visible") {
    contentMenu.style.visibility = "hidden";
  } else {
    contentMenu.style.visibility = "visible";
  }
}

export { toggleMenu };
