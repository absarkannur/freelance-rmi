//________
$(function(){

    var page = 0;

    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });

    document.addEventListener('touchmove', function(event) {
        event = event.originalEvent || event;
        if(event.scale > 1) {
          event.preventDefault();
        }
    }, false);

    
    if( window.orientation == 90 ){
        // $('.ad-body').css({ width: '480px', height: '320px' });
    } else {
        // $('.ad-body').css({ width: '320px', height: '480px' });
    }

    var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function() {
        
        if( window.orientation == 0 ){
            // $('.ad-body').css({ width: '320px', height: '480px' });
        } else {
            // $('.ad-body').css({ width: '480px', height: '320px' });
        }

    }, false );
    
    $('.btn_watch_trailer,.btn_watch_trailer_2').click(function(){
        //
        window.location.href = 'https://www.youtube.com/watch?v=qSqVVswa420';
    });
    
    //
    $('.btn_become_pilot').click(function(){

        var vid = document.getElementById("bg_video");
        vid.play();
    
        setTimeout(function(){
            vid.pause();
        }, 500)
        
        page = 1;
        $('.page1').hide();
        $('.page2').show();
        $('.ad-body').css({ width: '480px', height: '320px' });
        // window.screen.lockOrientation(orientation);

    });

    $('.btn_start').click(function(){
        $('.stage1').hide();
        $('.stage2').show();
    });
    
    function startVideo(){
        $('.stage1,.stage2').hide();
        var vid = document.getElementById("bg_video");
        vid.play();

        vid.ontimeupdate = function() {
            if( Math.round( vid.currentTime ) == 20  ){
                vid.pause();
                $('.stage3').show();
            }
        }

    }

    function playStage3(){
        $('.stage1,.stage2,.stage3').hide();
        var vid = document.getElementById("bg_video");
        vid.play();

        vid.ontimeupdate = function() {
            if( Math.round( vid.currentTime ) == 26 ){
                vid.pause();
                $('.stage4').show();
            }
        }

    }

    function playStage4(){
        $('.stage1,.stage2,.stage3,.stage4').hide();
        var vid = document.getElementById("bg_video");
        vid.play();

        vid.ontimeupdate = function() {
            if( Math.round( vid.currentTime ) == 29 ){
                vid.pause();
                $('.stage5').show();
            }
        }

    }

    function playStage5(){
        $('.stage1,.stage2,.stage3,.stage4,.stage5').hide();
        var vid = document.getElementById("bg_video");
        vid.play();

        vid.ontimeupdate = function() {
            if( Math.round( vid.currentTime ) == 33 ){
                vid.pause();
                $('.page1,.page2').hide();
                $('.ad-body').css({ width: '320px', height: '480px' });
                $('.page3').show();
            }
        }

    }

    $('#stage2').click(function(){
        startVideo();
    })

    // Triggers
    
    // var tap = document.getElementById("stage2"); 
    // var hammer_tap = new Hammer(tap);
    
    // hammer_tap.on("doubletap", function() {
    //     startVideo();
    // });
    // ================
    var swipe_left = document.getElementById("stage3"); 
    var hammer_swipe_left = new Hammer(swipe_left);
    
    hammer_swipe_left.on("swipeleft", function() {
        playStage3();
    });
    // ================
    var swipe_right = document.getElementById("stage4"); 
    var hammer_swipe_right = new Hammer(swipe_right);
    
    hammer_swipe_right.on("swiperight", function() {
        playStage4();
    });
    // ================
    var swipe_down = document.getElementById("last_stage"); 
    var hammer_swipe_down = new Hammer(swipe_down);

    hammer_swipe_down.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    
    hammer_swipe_down.on("swipedown", function() {
        playStage5();
    });


    

});

