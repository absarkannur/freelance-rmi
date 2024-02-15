$(function(){

    var bg1 = './b1.png';
    var bg2 = './b2.png';

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

        var iHeight = $('#get_size').innerHeight();
        var iWidth = $('#get_size').innerWidth();

        var mopH = $('.js_mop').innerHeight();

        $('.js_mop').css({top: iHeight-mopH-100 });

        $('.scratchpad').width( iWidth ).height( iHeight );
        
        init();

    }

    // Ads

    $('#page1').click(function(){
        $('#page1').hide();
        $('#page2').fadeIn(666);
    });

    // 

    function init() {
    
        $('#promo').wScratchPad({
            // the size of the eraser
            size: 80,
            // the randomized scratch image   
            bg: bg2,
            // give real-time updates
            realtime: true,
            // The overlay image
            fg: bg1,
            // The cursor (coin) image
            scratchMove: function(e, percent) {
                if ( percent >= 45 ) {
                    LastPage();
                }
    
            },
        });

    }

    function LastPage(){
        // Next
        $('#page2').hide();
        $('#page3').fadeIn(666);
    }

    $('#promo').mousemove( function( e ){

        $('.js_hand').hide();

        // console.log( e );
        $('.js_mop').css({ 'top': e.offsetY-350, 'left': e.offsetX-220 });
    
    });



});