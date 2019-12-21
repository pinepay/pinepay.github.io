// -----------------------------

//   js index
/* =================== */
/*  
    

    

*/
// -----------------------------


(function ($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function () {
        $('#preloader').delay(1000).fadeOut('slow', function () { $(this).remove(); });
    });

    //=========================
    //  Active current menu while scrolling
    //=========================

    //ACTIVE CURRENT MENU WHILE SCROLLING

    $(window).on("scroll", function () {

        activeMenuItem($(".nav-menu"));

    });

    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");


        sections.each(function () {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }

    //=========================
    // Smoth Scroll
    //=========================

    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    $(window).on("load", function () {
        smoothScrolling($(".main-menu > nav > ul > li > a[href^='#']"), 70);
    });

    //=========================
    // Slick Nav Activation
    //=========================
    $('.nav-menu > ul').slicknav({
        'prependTo': '.mobile_menu'
    });

    /*------------------------------
    MagnificPopup Activation
    -------------------------------- */
    /* magnificPopup video view */
    $('.expand-video').magnificPopup({
        type: 'iframe'
    });

    /*-----------------------------
    Warm Canvas activation
    ------------------------------- */
    if ($('.warm-canvas').length) {
        $('.warm-canvas').glassyWorms({
            colors: ['#fff', '#c2c2c2'],
            useStyles: true,
            numParticles: 500,
            tailLength: 20,
            maxForce: 8,
            friction: 0.75,
            gravity: 9.81,
            interval: 3
            // colors: ['#000'],
            // element: $('<canvas class="worms"></canvas>')[0]
        });
    }

    /*------------------------------
         counter
    ------------------------------ */

    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    /*-----------------------------
    Background Paralax activation
    ------------------------------- */
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function () {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                });

                if (window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();

    $(window).on("scroll", function () {

        bgParallax();
    });


}(jQuery));