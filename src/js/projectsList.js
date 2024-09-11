export function keepHoverOnProjectName() {
  const listItems = document.querySelectorAll("#projects-list");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((li) => classList.remove("active"));
      this.classList.add("active");
    });
  });
}
