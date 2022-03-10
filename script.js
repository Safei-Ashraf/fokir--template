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
let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    let that = this;
    let delta = 300 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('txt-rotate')[0];
        let toRotate = elements.getAttribute('data-rotate');
        let period = elements.getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements, JSON.parse(toRotate), period);
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};