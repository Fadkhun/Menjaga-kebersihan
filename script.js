// Tambahkan interaktivitas kecil, highlight menu saat scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const tocLinks = document.querySelectorAll('.toc a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  tocLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});