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

window.onload = function () {
    init();
}

function init() {
    var distance = 100
    if (document.body.scrollTop < distance || document.documentElement.scrollTop < distance) {
        document.getElementById("main-logo").style.transition = '.3s';
        document.getElementsByTagName("header")[0].style.transition = '.3s';
    }
}

window.onscroll = function () { myFunction() };


function myFunction() {
    var distance = 100;
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
        document.getElementById("main-logo").style.width = "50px";
        document.getElementsByTagName("header")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByTagName("header")[0].style.height = "68px";
        document.getElementsByTagName("nav")[0].style.padding= ".5em 0";
    } else {
        document.getElementById("main-logo").style.width = "100px";
        document.getElementsByTagName("header")[0].style.backgroundColor = "";
        document.getElementsByTagName("header")[0].style.height = "136px";
        document.getElementsByTagName("nav")[0].style.padding= "1em 0";
    }
}

function scrollToTargetAdjusted(id){
    var element = document.getElementById(id);
    var headerOffset = 68;
    var elementPosition = element.offsetTop -68//.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: elementPosition,
         behavior: "smooth"
    });
}