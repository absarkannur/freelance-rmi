// : )

$(function(){

    $(document).ready(function(){
        var scroll = $(window).scrollTop();
        if( scroll >= 1300 ) {
            $('.banner-fixed').show();
        } else {
            $('.banner-fixed').hide();
        }
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if( scroll >= 1300 ) {
            $('.banner-fixed').show();
        } else {
            $('.banner-fixed').hide();
        }
    });

    // -------


});