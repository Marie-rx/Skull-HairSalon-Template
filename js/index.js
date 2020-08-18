window.sr = ScrollReveal();

var minWidth200px = window.matchMedia("(min-width:200px)");
var minWidth640px = window.matchMedia("(min-width:640px)");
var minWidth1024px = window.matchMedia("(min-width:1024px)");

$(document).ready(() => {

    //Years of expertise
    var myAge = document.getElementById("age");
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    myAge.innerHTML = getAge('1991-04-20');

    //change copyrights date to current
    var copyrightYear = document.getElementById("copyrights");
    copyrightYear.innerHTML = new Date().getFullYear();

    //smooth scroll to hash
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        //scroll to hash
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
    });


    //SMALL SIZE SCREEN ANIM
    if (minWidth200px.matches) {

        //Anim Games
        sr.reveal('.animGame', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
        });
    };

    if (minWidth640px.matches) {

        //banner icons anim
        sr.reveal('.icon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            interval: 100,
            delay: 800
        });
    };
    //END OF SMALL ANIMATIONS



    //LARGE SIZE SCREEN ANIM
    if (minWidth1024px.matches) {

        sr.reveal('.icon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            viewFactor: 0,
            interval: 100,
            delay: 800
        });
    }
    //END OF LARGE ANIMATIONS
});