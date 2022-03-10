let navToggle = document.getElementsByClassName("navToggle")[0]
let navLinks = document.getElementsByClassName("navLinks")[0]

navToggle.addEventListener("click", menuDown);
function menuDown() {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none"
    } else {
        navLinks.style.display = "flex"
    }
}

let navbar = document.getElementsByClassName("navbar")[0]

window.onscroll = function () {
    const VERTICAL_SPACE = 200
    if (document.body.scrollTop >= VERTICAL_SPACE || document.documentElement.scrollTop >= VERTICAL_SPACE) {
        navbar.classList += " navColored";
        navbar.classList.remove("navTransparent");
    }
    else {
        navbar.classList += " navTransparent";
        navbar.classList.remove("navColored");
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("clientCard");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSlide", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " activeSlide";
}