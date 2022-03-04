let navToggle = document.getElementsByClassName("navToggle")[0]
let navLinks = document.getElementsByClassName("navLinks")[0]

navToggle.addEventListener("click", menuDown);
function menuDown(){
    if(navLinks.style.display === "flex"){
        navLinks.style.display="none"
    }else{
        navLinks.style.display="flex"
    }
}
