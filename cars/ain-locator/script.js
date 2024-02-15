$(function(){

    var video_bg = document.getElementById("video_bg");
    var perc_25= false, perc_50= false, perc_75= false, perc_100 = false;

    video_bg.ontimeupdate = function() {

        var time = Math.round( video_bg.currentTime ); 
        
        if( time == 15 ){
            if( perc_25 == false ){
                ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-VIDEO-PLAY-25%', 'Click', 'engagement', 1 );
                perc_25 = true;
            }
        } else if( time == 20 ){
            if( perc_50 == false ){
                ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-VIDEO-PLAY-50%', 'Click', 'engagement', 1 );
                perc_50 = true;
            }
        } else if( time == 30 ){
            if( perc_75 == false ){
                ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-VIDEO-PLAY-75%', 'Click', 'engagement', 1 );
                perc_75 = true;
            }
        } else if( time == 42 ){
            if( perc_100 == false ){
                ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-VIDEO-PLAY-100%', 'Click', 'engagement', 1 );
                perc_100 = true;
            }
        }

    }

    $('.clk_explore').click(function(){
        $('.page1,.page2,.page3').hide();
        $('.page2').show();

        ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-CLICK-EXPLORE-BTN', 'Click', 'engagement', 1 );

    });

    $('.clk_locate').click(function(){
        $('.page1,.page2,.page3').hide();
        $('.page3').show();

        ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-CLICK-LOCATE-US-BTN', 'Click', 'engagement', 1 );
        
        getPlace();
    });

    $('.back').click(function(){
        $('.page2,.page3').hide();
        $('.page1').show();

        ga( 'send', 'event', 'Peugeot-Locate-Us-2008-AIN-EN-CLICK-BACK-BTN', 'Click', 'engagement', 1 );

    });

    var owl = $('.slider').owlCarousel({
        loop            : true,
        margin          : 0,
        nav             : true,
        items           : 1,
        center          : true,
        autoplay        : false,
        autoplayTimeout : 5000,
        dots            : true
    });

    var select_name = '';

    owl.on('changed.owl.carousel', function(e) {

        switch ( e.page.index ) {
            case 0:
                select_name = 'Peugeot-Locate-Us-2008-AIN-EN-' + 'SLIDE 1';
                break;
            case 1:
                select_name = 'Peugeot-Locate-Us-2008-AIN-EN-' + 'SLIDE 2';
                break;
            case 2:
                select_name = 'Peugeot-Locate-Us-2008-AIN-EN-' + 'SLIDE 3';
                break;
            case 3:
                select_name = 'Peugeot-Locate-Us-2008-AIN-EN-' + 'SLIDE 4';
                break;
            default:
                break;
        }

        ga( 'send', 'event', select_name , 'Slider', 'engagement', 1 );

    });

});