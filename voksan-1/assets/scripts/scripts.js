jQuery(window).trigger("resize").trigger("scroll");

$(function () {
  // ------------------
  $(".nav-link.dropdown-toggle").mouseover(function () {
    $(this)
      .parent()
      .find(".cu-dropdown")
      .find(".image-section")
      .find(".image")
      .removeClass("active");

    $(this)
      .parent()
      .find(".cu-dropdown")
      .find(".image-section")
      .find(".image")
      .eq(0)
      .addClass("active");
  });

  $(".nav-list .nav").mouseover(function () {
    var index = $(this).index();
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".image-section .image")
      .removeClass("active");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".image-section")
      .find(".image")
      .eq(index)
      .addClass("active");
  });

  // ------------------

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

  var home_owl = $(".journey-slider").owlCarousel({
    autoWidth: true,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 300,
  });

  $(".js_jr_next").click(function () {
    home_owl.trigger("next.owl.carousel");
  });
  $(".js_jr_prev").click(function () {
    home_owl.trigger("prev.owl.carousel");
  });

  // ----
});
