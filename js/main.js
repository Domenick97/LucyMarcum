// Smooth Scrolling algorithm found from https://css-tricks.com/smooth-scrolling-accessibility/
// and has been modified to better suite this site
// Function: Scrolls to the location specified by the link clicked and doesn't append the 
// id to the address bar
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 750);
                return false;
            }
        }
    });
});


window.onload = function () { init() };
window.onscroll = function () { updateHeader() };
window.onresize  = function () { updateHeader() };

var header = document.getElementById("myHeader");
var logoNav = document.getElementById("nav-logo");
var headerTop = header.offsetTop;

function init() {
    updateHeader();
}

function updateHeader() {
    if (window.innerWidth > 767) {
        header.classList.remove("mobile-header");
        if (window.pageYOffset > headerTop) {
            header.classList.add("stuck");
            header.classList.remove("unstuck");
            logoNav.style.height = '64px';
        } else {
            header.classList.remove("stuck");
            header.classList.add("unstuck");
            logoNav.style.height = '118px';
        }
    } else {
        header.classList.remove("unstuck");
        header.classList.remove("stuck");
        header.classList.add("mobile-header");
        logoNav.style.height = '52px';
    }
}