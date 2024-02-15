$(function(){

    var soundPlay = document.getElementById("myAudio");

    $('.start_engine').click(function(){
        soundPlay.play();
        $('.started').addClass('phone').show();        

    });

    soundPlay.ontimeupdate = function() {

        navigator.vibrate(500);

        if( soundPlay.currentTime == 2.168163 ){
            navigator.vibrate(0);
            $('.started').removeClass('phone');
        }

    }

});