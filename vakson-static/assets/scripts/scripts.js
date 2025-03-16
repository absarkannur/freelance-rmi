$(function(){

    var owl = $('.homebanner');

    // Page Loader
    function imgLoadedCallback() {
        showPage();
    }
    function preloadimages(n) {
        function o() {
            ++a == n.length && imgLoadedCallback()
        }
        for (var e = [], a = 0, t = (n = "object" != typeof n ? [n] : n, 0); t < n.length; t++) e[t] = new Image, e[t].src = n[t], e[t].onload = function() {
            a / n.length * 100, o()
        }, e[t].onerror = function() {
            o()
        }
    }! function() {
        for (var n = document.getElementsByTagName("img"), o = [], e = 0; e < n.length; e++) o.push(n[e].src);
        preloadimages(o)
        if (o.length == 0) {
            showPage();
        }
    }();
    function showPage() {
        var loader = document.getElementById("loader");
        loader.style.display="none";
        owl.trigger('to.owl.carousel', [0, 0]);
    }
    
    // Home Banner Slider
    owl.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.property-slider').owlCarousel({
        loop: true,
        center: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    $('.vertical_tabs .tab-wrap').click(function(){
        
        var index = $(this).index();

        $('.vertical_tabs .tab-wrap').removeClass('active');
        $('.vertical_tabs .tab-wrap').eq(index).addClass('active');

    });

    $('.vertical_tabs_2 .tab-wrap').click(function(){
        
        var index = $(this).index();

        $('.vertical_tabs_2 .tab-wrap').removeClass('active');
        $('.vertical_tabs_2 .tab-wrap').eq(index).addClass('active');

    });

});