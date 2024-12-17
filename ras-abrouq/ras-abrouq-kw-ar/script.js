$(function(){

    var owl = $('.owl-carousel');

    // Page Loader
    function imgLoadedCallback() {
        showPage();
    }
    function preloadimages(n) {
        function o() {
            ++a == n.length && imgLoadedCallback()
        }
        for (var e = [], a = 0, t = (n = "object" != typeof n ? [n] : n, 0); t < n.length; t++) e[t] = new Image, e[t].src = n[t], e[t].onload = function() {
            a / n.length * 100, o()
        }, e[t].onerror = function() {
            o()
        }
    }! function() {
        for (var n = document.getElementsByTagName("img"), o = [], e = 0; e < n.length; e++) o.push(n[e].src);
        preloadimages(o)
        if (o.length == 0) {
            showPage();
        }
    }();
    function showPage() {
        var loader = document.getElementById("loader");
        loader.style.display="none";
        adLoad();
    }

    function adLoad(){
        var loader = document.getElementById("page1");
        loader.style.display="block";
    }

    // Swipe Down
    var swipe_down = document.getElementById("page1"); 
    var swipe = new Hammer( swipe_down );
    swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    swipe.on("swipedown", function () { 
        $('#page1').hide();
        $('#page2').show();
        handleShowSlider(0);
    });

    swipe.on("swipeup", function () { 
        $('#page1').hide();
        $('#page2').show();
        handleShowSlider(0);
    });
    
    var interval;

    function handleShowSlider( index ){
        var element = $('.slide_dots .dot').eq(index).find('.progress');
        var i = 0;

        interval = setInterval(function(){
            element.css({ width: i + '%' })

            if( i >= 100 ) {
                clearInterval( interval );
                if( index != 3 ) {
                    handleShowSlider( index+1);
                    owl.trigger('to.owl.carousel', index+1 );
                }
            }

            i++;
        }, 50 )

    }

    $(".slide_dots .dot").click(function( e ) {
        var index = Math.abs( $(this).index() );
        clearInterval( interval );
        owl.trigger('to.owl.carousel', index );
        handleShowSlider( index);
    });

    owl.owlCarousel({
        rtl:true,
        items: 1,
        loop:false,
        margin:0,
        nav:false,
        dots: false
    });

    owl.on('dragged.owl.carousel', function(event) {
        clearInterval( interval );
        handleShowSlider( event.item.index );
    });


});

