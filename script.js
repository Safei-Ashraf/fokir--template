let navToggle = document.getElementsByClassName("navToggle")[0]
let navLinks = document.getElementsByClassName("navLinks")[0]
let filterSelection = document.getElementsByClassName("filterSelection")
let allImages = document.getElementsByClassName('all')
// toggle menu
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
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        navbar.classList += " navColored";
        navbar.classList.remove("navTransparent");
    }
    else {
        navbar.classList += " navTransparent";
        navbar.classList.remove("navColored");
    }
    navLinks.style.display === "flex" ? navLinks.style.display = "none" : navLinks.style.display = "flex"
}
// items filtration
for (let i = 0; i < filterSelection.length; i++) {
    filterSelection[i].addEventListener("click", filterDisplay)
    filterSelection[i].addEventListener("click", addActive)
}
function filterDisplay(e) {
    for (let image of allImages) {
        image.classList.contains(e.currentTarget.innerText.replace(/\s+/g, "").toLowerCase())
            ?
            image.style.display = "flex"
            :
            image.style.display = "none"
    }
}
// active button
function addActive(e) {
    for (let i = 0; i < filterSelection.length; i++) {
        const item = filterSelection[i];
        item.classList.remove("active")
    }
    e.target.className += " active";
}