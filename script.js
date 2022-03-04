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
// items filtration
for (let i = 0; i < filterSelection.length; i++) {
    filterSelection[i].addEventListener("click", filterDisplay)
    filterSelection[i].addEventListener("click", addActive)
}
function filterDisplay(e) {
    for (let image of allImages) {
        if (image.classList.contains(e.currentTarget.innerText.replace(/\s+/g, "").toLowerCase())) {
            image.style.display = "flex"
        } else {
            image.style.display = "none"
        }
    }
}
