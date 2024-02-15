

$( function() {

    $('.btn_group li').click( function( e ){
        var index = $(this).index() + 1;

        ga( 'send', 'event', 'Nissan Patrol EN Page ' + index , 'view', 'engagement', 1 );

        $( '.page0,.page1,.page2,.page3' ).hide();
        $('.page'+ index ).show();
    });

    $( "#slider_range" ).slider({
        max: 63,
        value: 0,
        slide: function( e, ui ) {

            $('.gallery li').removeClass('active');
            $('.gallery li').eq( ui.value ).addClass('active');
            
            if( ui.value >= 1 && ui.value <= 2 ){
                ga( 'send', 'event', 'Nissan Patrol EN 360' , 'play', 'engagement', 1 );
            }

        }
    });


});

