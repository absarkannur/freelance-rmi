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

        if (!mraid.supports("calendar")) {
            alert("MRAID says calendar is not supported on this device.");
        } else {
            var calendarObject = {
                description: "Mery Poppins",
                location: "Italy",
                start: "2018-11-08T00:00-05:00",
                end: "2018-11-08T00:00-05:00"
            };
    
            mraid.createCalendarEvent(calendarObject);
            alert( 'Done' );
        }
            

    })

});