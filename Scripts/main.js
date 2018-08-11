function main() {
    (function () {
        'use strict';
        // $('a.page-scroll').click(function () {
        //    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
        //        var target = $(this.hash);
        //        target = target.length ? target : $('[name =' + this.hash.slice(1) + '1');
        //        if (target.length){
        //            $('html,body').animate({
        //                scrollTop: target.offset().top - 40
        //            },900);
        //            return false;
        //        }
        //    }
        // });
        // show manu on Book
        $(window).bind('scroll',function () {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            }else {
                $('.navbar-default').removeClass('on');
            }
        });
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        // hide nav on click
        $('.navbar-nav li a').click(function (event) {
            // checkk if window is small enough so dropdown is created
            var toggle = $('.navbar-toggle').is(':visible');
            if (toggle){
                $('.navbar-collapse').collapse('hide');
            }
        });
        // Portfolio isotope filter
        $(window).load(function () {
            var  $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function () {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });

        /*Scroll to top when arrow up clicked BEGIN*/
        // ===== Scroll to Top ====

        /*Scroll to top when arrow up clicked END*/
    }());
    /* Back to Top
   * ------------------------------------------------------ */

}

main();
// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//         $('#go-top').fadeIn(200);    // Fade in the arrow
//     } else {
//         $('#go-top').fadeOut(200);   // Else fade out the arrow
//     }
// });
// $('#go-top').click(function() {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });

// ===== Scroll to Top ====
// ===== Scroll to Top ====
