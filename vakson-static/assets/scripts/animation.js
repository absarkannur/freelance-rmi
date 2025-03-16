
jQuery(document).ready(function($) {

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: ".info-wrapper",
    })
    .on('start', function () {
        infoSection();
    })
    .addTo( controller );

    function infoSection() {

        $('.info-wrapper h1.title').removeClass('visible-hidden').addClass('animate__fadeInUp');

        setTimeout(function(){
            var li = [ 0, 1, 2 ];

            li.map( ( item, i ) => {
                setTimeout(function() {
                    $('.info-wrapper .achievement .list').eq(item).removeClass('visible-hidden').addClass('animate__zoomIn');
                },(i*100));
            });

        }, 500);

    }

    // ------------------

    // new ScrollMagic.Scene({
    //     triggerElement: ".pillar-wrapper",
    // })
    // .on('start', function () {
    //     pillarSection();
    // })
    // .addTo( controller );

    // function pillarSection(){
    //     $('.pillar-wrapper .vertical_tabs').removeClass('visible-hidden');
    // }

    // ------------------

    new ScrollMagic.Scene({
        triggerElement: ".years-wrapper",
    })
    .on('start', function () {
        yearSection();
    })
    .addTo( controller );

    function yearSection(){
        $('.years-wrapper .image-wrap').removeClass('visible-hidden').addClass('animate__zoomIn');
    }

    // ------------------

    new ScrollMagic.Scene({
        triggerElement: ".timeline-wrapper",
    })
    .on('start', function () {
        timeSection();
    })
    .addTo( controller );

    function timeSection(){
        $('.timeline-wrapper h2.header').removeClass('visible-hidden').addClass('animate__fadeInUp');
        $('.timeline-wrapper .image-wrap').removeClass('visible-hidden').addClass('animate__fadeInUp');
    }

    
    // ------------------

    new ScrollMagic.Scene({
        triggerElement: ".project-wrapper",
    })
    .on('start', function () {
        projectSection();
    })
    .addTo( controller );

    function projectSection(){
        $('.project-wrapper h2.header').removeClass('visible-hidden').addClass('animate__fadeInUp');
        $('.project-wrapper h3.sub-header').removeClass('visible-hidden').addClass('animate__fadeInUp');
        $('.project-wrapper .property-slider').removeClass('visible-hidden').addClass('animate__fadeInUp');
    }


    // Window Scrol
    $(window).scroll(function() {
        
        var scroll = $(this).scrollTop();

        if( scroll > 800 ){
            $('.header-wrapper .navbar').addClass('gray');
        } else {
            $('.header-wrapper .navbar').removeClass('gray');
        }


    });



});