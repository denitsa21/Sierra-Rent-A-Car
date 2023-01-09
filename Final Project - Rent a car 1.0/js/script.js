const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    this.classList.toggle('active');
});

hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


const goTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', checkHeight)
function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "flex"

    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

ScrollReveal().reveal('.h1-home');
ScrollReveal().reveal('.splide__slide');
ScrollReveal().reveal('.container', { delay: 150 });
ScrollReveal().reveal('.car-brands', { delay: 150 });
ScrollReveal().reveal('.about-content-info', { delay: 150 });
ScrollReveal().reveal('.car-brands', { delay: 150 });
ScrollReveal().reveal('.p-horizontal', { delay: 150 });
ScrollReveal().reveal('.h2-about', { delay: 150 });
ScrollReveal().reveal('.info'), { delay: 150 };
ScrollReveal().reveal('.mobile-app', { delay: 150 });
ScrollReveal().reveal('.p-app-info', { delay: 150 });
ScrollReveal().reveal('.footer-section1', { delay: 150 });
ScrollReveal().reveal('.about-content-image', { delay: 150 });
ScrollReveal().reveal('.footer-information', { delay: 150 });
ScrollReveal().reveal('.footer-company', { delay: 150 });

