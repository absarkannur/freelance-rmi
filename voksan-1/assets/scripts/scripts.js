jQuery(window).trigger("resize").trigger("scroll");

$(function () {
  $(".vertical_tabs .tab-wrap").click(function () {
    var index = $(this).index();

    $(".vertical_tabs .tab-wrap").removeClass("active");
    $(".vertical_tabs .tab-wrap").eq(index).addClass("active");
  });

  $(".vertical_tabs_2 .tab-wrap").click(function () {
    var index = $(this).index();

    $(".vertical_tabs_2 .tab-wrap").removeClass("active");
    $(".vertical_tabs_2 .tab-wrap").eq(index).addClass("active");
  });

  // Home Page slider

  var home_owl = $(".home-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
  });

  $(".js_next").click(function () {
    home_owl.trigger("next.owl.carousel");
  });
  $(".js_prev").click(function () {
    home_owl.trigger("prev.owl.carousel");
  });
});
