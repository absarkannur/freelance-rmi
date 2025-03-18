$(function(){ 

    setTimeout( function(){

        $('.poppin').animate({ top: '140px', width: '154px', height: '193px' }, 6666, function(){
            $(this).animate({ top: '485px', left: '90px' }, 3000, function(){
                $('.heading').show();

                setTimeout( function(){
                    $('.page1').hide();
                    $('.page2').show();
                }, 1500 )

            });
        });

    }, 500 );


    $('.lernmore').click(function(){

        mraid.createCalendarEvent({
            description: "Mery Poppins",
            location: "everywhere", 
            start: "2018-12-21T00:00-05:00",
            end: "2018-12-22T00:00-05:00"
        });

    })

});