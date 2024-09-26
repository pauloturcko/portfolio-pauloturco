const contentMenu = document.getElementById("menu");

function toggleMenu() {
  if (contentMenu.style.visibility === "visible") {
    contentMenu.style.visibility = "hidden";
  } else {
    contentMenu.style.visibility = "visible";
  }
}

// function animationMenu() {
//   if(contentMenu.style.visibility === "hidden") {
//     contentMenu.classList.add('show')
//     setTimeout(() => {
//       contentMenu.style.visibility = 'hidden';
//     }, 400);
//   } else {
//     contentMenu.classList.remove('show')
//   }
// };

export { toggleMenu };
