function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();


function toggleAccordion(header) {
  var content = header.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
 if (window.scrollY >= 100) {
backToTopButton.classList.add('show')
 } else {
backToTopButton.classList.remove('show')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
})