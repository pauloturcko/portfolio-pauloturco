function scrollAnime() {
  const sections = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.6;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - halfWindow;
    if(sectionTop < 0) {
      section.classList.add('ativo')
    }
  })
}

export { scrollAnime }