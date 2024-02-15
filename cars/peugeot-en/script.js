$(function(){

    // Slider

    $('.car_select li').click(function(){
        var index = $(this).index()+1;
        $('.cars, .car_select li').removeClass('active');

        $(this).addClass('active');
        $( ".car_"+ index ).addClass('active');

        var select_name = '';

        switch ( index ) {
            case 1:
                select_name = 'Peugeot-208-EN-' + 'NERA BLACK';
                break;
            case 2:
                select_name = 'Peugeot-208-EN-' + 'YELLOW FARO';
                break;
            case 3:
                select_name = 'Peugeot-208-EN-' + 'PLATINUM GREY';
                break;
            case 4:
                select_name = 'Peugeot-208-EN-' + 'ARTENSE GRAY';
                break;
            case 5:
                select_name = 'Peugeot-208-EN-' + 'ELIXIR RED';
                break;
            case 6:
                select_name = 'Peugeot-208-EN-' + 'PEARLESCENT WHITE';
                break;
            case 7:
                select_name = 'Peugeot-208-EN-' + 'VERTIGO BLUE';
                break;
            default:
                break;
        }

        ga( 'send', 'event', select_name , 'Car Selected', 'engagement', 1 );
    
    });


    $('.explore').click(function(){

        $('.page1').hide();
        $('.page2').show();

        ga( 'send', 'event', 'Peugeot-208-EN-CLICK-EXPLORE-PEUGEOT-208' , 'Click', 'engagement', 1 );

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
                    select_name = 'Peugeot-208-EN-' + 'SLIDE 1';
                    break;
                case 1:
                    select_name = 'Peugeot-208-EN-' + 'SLIDE 2';
                    break;
                case 2:
                    select_name = 'Peugeot-208-EN-' + 'SLIDE 3';
                    break;
                case 3:
                    select_name = 'Peugeot-208-EN-' + 'SLIDE 4';
                    break;
                default:
                    break;
            }

            ga( 'send', 'event', select_name , 'Slider', 'engagement', 1 );

        });

    });

    $('.back').click(function(){
        $('.page2').hide();
        $('.page1').show();
        ga( 'send', 'event', 'Peugeot-208-EN-CLICK-BACK', 'Click', 'engagement', 1 );
    });

});