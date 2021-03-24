$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots: true,
    appendDots:'.slider-dots',
    dotsClass: 'dots'
})


// hamberger js
let mobileNav = document.querySelector('.mobile-nav');

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false; // initially closed menu or hidden
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        // so adding a class to menu btn
        menuBtn.classList.add('open');
        menuOpen = true; // open status to true
        mobileNav.classList.add('open');

    } else if(menuOpen){
        menuBtn.classList.remove('open');
        menuOpen = false;
        mobileNav.classList.remove('open');
    }
});

let mobileNavLinks = document.querySelector('.mobile-nav')
mobileNavLinks.addEventListener('click', () => {
    if(menuOpen){
        mobileNav.classList.remove('open');
        menuBtn.classList.remove('open');

    }
});

// for animations of the elements like zoom-in slide etc
AOS.init({
    offset: 100,
    duration: 1000
});

});
