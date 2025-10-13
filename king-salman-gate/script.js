
var video = document.getElementById("video_bg");

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

    var click = false;
    var bg1 = './wipe1-1.png';
    var bg2 = './wipe2-2.png';

    $('#promo').wScratchPad({
        // the size of the eraser
        size        : 70,    
        // the randomized scratch image   
        bg:  bg2,
        // give real-time updates
        realtime    : true, 
        // The overlay image
        fg: bg1,
        // The cursor (coin) image
        scratchMove: function(e, percent){ 

            $('.hand').hide();
            
            if( percent >= 70 ){
                if( click == false ){
                    wipe();
                }
            }

        },
    });

    setTimeout(function(){
        $('#page1').fadeOut(9999);
        $('#page2').show();
    },2300);

    $('.hand').mousedown(function(){
        $('#page1').hide();
        $('#page2').show();
    });
        
    function wipe(){
        click = true;
        $('#page1').hide();
        $('#page2').hide();
        $('#page3').show();
    }

    $('.btn_video').click(function(){
        $('.video_wrapp').fadeIn(333);
        setTimeout(function(){
            video.play();
        },500)
    });

    $('.close').click(function(){
        video.pause();
        $('.video_wrapp').fadeOut(333);
    });

});