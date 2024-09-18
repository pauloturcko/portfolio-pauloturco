export function initializeProjectList() {
  // Seleciona todos os itens da lista dentro do id "projects-list"
  const projectItems = document.querySelectorAll("#projects-list .list-item");

  // Adiciona o evento de clique em cada item
  projectItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove a classe 'active' de todos os itens
      projectItems.forEach((li) => li.classList.remove("active"));
      // Adiciona a classe 'active' apenas ao item clicado
      this.classList.add("active");
    });
  });
}
