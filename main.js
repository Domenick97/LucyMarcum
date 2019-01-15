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
