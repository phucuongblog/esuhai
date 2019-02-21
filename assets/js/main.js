jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Show Search
    $('.search-btn').click(function(){
        $(this).toggleClass('is-active');
        $('.menu-content form').slideToggle(400);
    });
    // Banner
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        animateOut:'fadeOut',
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // News
    $('.news-slider-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items: 2
            },
            1000:{
                items:3
            }
        }
    });
    // News
    $('.magazine-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items: 2
            },
            1000:{
                items:4
            }
        }
    });
    // QC
    $('.qc-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        animateOut:'fadeOut',
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Partner
    $('.partner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    // Show Tu van popup
    $('.tool-tuvan').click(function(){
        $('.tuvan-popup').addClass('show-popup');
    });
    $('span.close').click(function(){
        $('.tuvan-popup').removeClass('show-popup');
    });
    // Widget Magazine
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
    });
    // Show Service
    $('.service-btn').click(function(){
        $(this).toggleClass('show-widget');
        $('.widget-service ul').slideToggle(400);
    });
});