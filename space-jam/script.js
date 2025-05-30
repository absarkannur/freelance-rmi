//
$(function(){

    var video = document.getElementById('video_bg');

    // Page 1 Click
    $('.page1').click(function(){
        $('.page1,.page2,.page3').hide();
        $('canvas').css({ visibility: 'visible' });
    });

    //

    $('.watch_tr').click(function(){
        $('.layer').show();
        video.play();
    });

    $('.close').click(function(){
        video.pause();
        $('.layer').hide();
    });

});