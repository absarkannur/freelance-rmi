$(function(){

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
        adLoad();
    }

    function adLoad(){
        var loader = document.getElementById("page1");
        loader.style.display="block";
    }

    // Swipe Function

    var swipe1 = document.getElementById( "page1" );
    var swipe2 = document.getElementById( "page2" );
    var hammer_swipe1 = new Hammer(swipe1);
    var hammer_swipe2 = new Hammer(swipe2);

    hammer_swipe1.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer_swipe2.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    hammer_swipe1.on("swipeup", function() {
        $('#page1').hide();
        $('#page2').fadeIn();

        setTimeout(function(){
            $('.slider').css({ 'visibility': 'visible' });
        },1200);

    });

    hammer_swipe2.on("swipeup", function() {
        $('#page2').hide();
        $('#page3').fadeIn();

        // Pause the video
        let vid = document.getElementById("video_bg");
        vid.pause();
        
    });

    //  Owl Carousel

    var owl = $('.slider');

    owl.children().each( function( index ) {
        $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    owl.owlCarousel({
        loop            : true,
        margin          : 30,
        nav             : false,
        items           : 4,
        center          : true,
        autoplay        : true,
        autoplayTimeout : 3000,
        dots: false
    });
    // owl.on('changed.owl.carousel', function(event) {        
    //     $('.slider .owl-item.active.center').next().next().css({'box-shadow': '0 0 10px blue' });
    // });

    // End Script

});


