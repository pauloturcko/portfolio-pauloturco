function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const top = section.offsetTop;
  // Option 1
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
  // Option 2
  /* 
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
  */
}

export { scrollToSection };