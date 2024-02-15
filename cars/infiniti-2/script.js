// ( -  - )

$(function(){


    $('.start_btn').click(function(){

        

        $('.started').show();

        setTimeout(function(){

            $('.page1').fadeOut(999);
            $('.page2').fadeIn(999);
    
            setTimeout(function(){
                $('.arrows').show();
                setInterval(function(){
                    show_arrows();
                }, 1500);
            }, 2000);

        }, 1600)


        vibrator();

    });

    $('.btn_1').click(function(){

        $('.page1,.page2,.page3,.page4,.page5').hide();
        $('.page3').show();

        setTimeout(function(){
            $('.slider_1').css({ 'visibility': 'initial' });
        },500)

    });

    $('.btn_2').click(function(){

        $('.page1,.page2,.page3,.page4,.page5').hide();
        $('.page4').show();

    });

    $('.btn_3').click(function(){

        $('.page1,.page2,.page3,.page4,.page5').hide();
        $('.page5').show();

        setTimeout(function(){
            $('.slider_3').css({ 'visibility': 'initial' });
        },500)

    });


    function vibrator(){
        navigator.vibrate(500);
    }

    function show_arrows(){

        setTimeout(function(){
            $('.arrows img').eq(0).show();
        },500);

        setTimeout(function(){
            $('.arrows img').eq(1).show();
        },700);

        setTimeout(function(){
            $('.arrows img').eq(2).show();
        },900);

        setTimeout(function(){
            $('.arrows img').hide();
        },1200);

    }

    // Owl Carousel

    $('.slider_1').owlCarousel({
        loop    : true,
        margin  : 0,
        nav     : true,
        items    : 1,
        dots    : false
    });

    $('.slider_3').owlCarousel({
        loop    : true,
        margin  : 0,
        nav     : true,
        items    : 1,
        dots    : false
    });


    $('.back_btn').click(function(){
        $('.page1,.page2,.page3,.page4,.page5').hide();
        $('.page2').show();
    });

   
});