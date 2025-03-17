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

    // swipe

    var swipe = document.getElementById( "page1" );
    var hammer_swipe = new Hammer(swipe);
    hammer_swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer_swipe.on("swipeup", function() {
        $('#page1').hide();
        $('#page2').show();

        $('.js_ribbon_right').addClass('ribbon-anim').animate({ 'right': '-320px' },1100);
        $('.js_ribbon_left').addClass('ribbon-anim').animate({ 'left': '-320px' },1100, function(){

            $('.js_door_right').animate({ 'right': '-320px' },1000);
            $('.js_door_left').animate({ 'left': '-320px' },1000, function(){
                lastSceen();
            });

        });

    });

    function lastSceen(){
        $('#page2').hide();
        $('#page3').show();

        sliderAnimation()

    }

    // Slider

    var slierInterval;

    function sliderAnimation(){
        slierInterval = setInterval(function(){
            var index = $('.slider img.active').index();
            $('.slider img,.slider-dot li').removeClass('active');
            $('.slider img').eq(index+1).addClass('active');
            $('.slider-dot li').eq(index+1).addClass('active');
            if( index == 4) {
                $('.slider img').eq(0).addClass('active');
                $('.slider-dot li').eq(0).addClass('active');
            }
        },2500)
    }
    $('.slider-dot li').click(function(){

        clearInterval( slierInterval );

        var index = $(this).index();
        $('.slider img,.slider-dot li').removeClass('active');
        $('.slider img').eq(index).addClass('active');
        $('.slider-dot li').eq(index).addClass('active');
        // Strat Again
        sliderAnimation();

    });


});