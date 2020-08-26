

var minWidth200px = window.matchMedia("(min-width:200px)");
var minWidth640px = window.matchMedia("(min-width:640px)");
var minWidth1024px = window.matchMedia("(min-width:1024px)");

$(document).ready(() => {

        $("#wrapper").css({"visibility" : "visible"})

    window.sr = ScrollReveal();
        $(window).scroll(function () {
           if ($(this).scrollTop() > 60) {
              $('.navbar').css('background-color', 'rgba(0, 0, 0, 0.950)');
           } 
           if ($(this).scrollTop() < 60) {
            $('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');
           }
        });

    //Years of expertise
    var YearsExp = $('#certif');
    const getYearsExp = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    YearsExp.html(getYearsExp('2007-02-20'));

    //change copyrights date to current
    $('#copyrights').html(new Date().getFullYear());

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

        //Anim Banner
        sr.reveal('.fastar', {
            duration: 1000,
            origin: 'top',
            distance: '2rem',
            viewFactor: 0,
            interval: 100,
            delay: 1400,
        });
        sr.reveal('.bannerIcon', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
                z: 100
            },
            viewFactor: 0,
        });
        sr.reveal('.banner', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 100,
        });
        sr.reveal('.lead', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 500,
        });
        sr.reveal('blockquote', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 1000,
        });
        sr.reveal('.blockquote-footer', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 1000,
        });
        
        sr.reveal('.likeBtnF', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
                z: 100
            },
            viewFactor: 0,
            delay: 1900,
        });

        sr.reveal('.photoInfos', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.center-block', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.googleMaps', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.priceCard', {
            duration: 1000,
            origin: 'bottom',
            duration: 1000,
            rotate: {
                x: 0,
                y: 100,
                z: 0
            },
            viewFactor: 0.5,
            interval: 300,
        });
        sr.reveal('p', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
            delay: 500,
        });
        sr.reveal('li.days', {
            duration: 600,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.skullColor', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 0.5,
        });
        sr.reveal('h2', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 100,
        });
        sr.reveal('#carouselExampleControls', {
            duration: 1000,
            origin: 'bottom',
            distance: '5rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.priceCoupe', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 100,
        });
        sr.reveal('.pricePhoto', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 200,
        });
        sr.reveal('.priceSoin', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 300,
        });
    };

    if (minWidth640px.matches) {

        //Anim Banner
        sr.reveal('.fastar', {
            duration: 1000,
            origin: 'top',
            distance: '2rem',
            viewFactor: 0,
            interval: 100,
            delay: 1400,
        });
        sr.reveal('.bannerIcon', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
                z: 100
            },
            viewFactor: 0,
        });
        sr.reveal('.banner', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 100,
        });
        sr.reveal('.lead', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 500,
        });
        sr.reveal('blockquote', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 1000,
        });
        sr.reveal('.blockquote-footer', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 1000,
        });
        
        sr.reveal('.likeBtnF', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
                z: 100
            },
            viewFactor: 0,
            delay: 1900,
        });

        sr.reveal('.photoInfos', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.center-block', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.googleMaps', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.priceCard', {
            duration: 1000,
            origin: 'bottom',
            duration: 1000,
            rotate: {
                x: 0,
                y: 100,
                z: 0
            },
            viewFactor: 0.5,
            interval: 300,
        });
        sr.reveal('p', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
            delay: 500,
        });
        sr.reveal('li.days', {
            duration: 600,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,

        });
        sr.reveal('.skullColor', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 0.5,
        });
        sr.reveal('h2', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 100,
        });
        sr.reveal('#carouselExampleControls', {
            duration: 1000,
            origin: 'bottom',
            distance: '5rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.priceCoupe', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 100,
        });
        sr.reveal('.pricePhoto', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 200,
        });
        sr.reveal('.priceSoin', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 300,
        });
    };
    //END OF SMALL ANIMATIONS



    //LARGE SIZE SCREEN ANIM
    if (minWidth1024px.matches) {
        //Anim Banner
        sr.reveal('.fastar', {
            duration: 1000,
            origin: 'top',
            distance: '2rem',
            viewFactor: 0,
            interval: 100,
            delay: 1400,
        });
        sr.reveal('.bannerIcon', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
                z: 100
            },
            viewFactor: 0,
        });
        sr.reveal('.banner', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 100,
        });
        sr.reveal('.lead', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 500,
        });
        sr.reveal('blockquote', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 1000,
        });
        sr.reveal('.blockquote-footer', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 1000,
        });
        
        sr.reveal('.likeBtnF', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
                z: 100
            },
            viewFactor: 0,
            delay: 1900,
        });

        sr.reveal('.photoInfos', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.center-block', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.googleMaps', {
            duration: 1000,
            origin: 'bottom',
            distance: '10rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.priceCard', {
            duration: 1000,
            origin: 'bottom',
            duration: 1000,
            rotate: {
                x: 0,
                y: 100,
                z: 0
            },
            viewFactor: 0.5,
            interval: 300,
        });
        sr.reveal('p', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
            delay: 500,
        });
        sr.reveal('li.days', {
            duration: 600,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.skullColor', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 0.5,
        });
        sr.reveal('h2', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            delay: 100,
        });
        sr.reveal('#carouselExampleControls', {
            duration: 1000,
            origin: 'bottom',
            distance: '5rem',
            viewFactor: 0.5,
            interval: 150,
        });
        sr.reveal('.priceCoupe', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 100,
        });
        sr.reveal('.pricePhoto', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 200,
        });
        sr.reveal('.priceSoin', {
            duration: 1000,
            rotate: {
                x: 100,
                y: 100,
            },
            viewFactor: 1,
            delay: 300,
        });
        
    }
    //END OF LARGE ANIMATIONS
});