$( function(){

    // Ads Loading
    function imgLoadedCallback() {
        showAd();
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
        if( o.length == 0 ){
           showAd(); 
        }
    }();

    function showAd(){
        $(document).find(".rmi-body").show();
    }

    // Ads Closeing //
    $(document).find('.close').click( function(){
        mraid.close();
    });

    // Ads Triggering
    $(document).on( "click", function( e ){

        var trigger = $( e.target ).attr( "trigger" );
        var landing = $('a.tracker').attr("href");

        
        if( trigger == '' ){
            window.open( landing, '_blank' );
        }
    
    });    


});