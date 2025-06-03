jQuery(document).ready(function ($) {
  var controller = new ScrollMagic.Controller();
  var countWidget = false;

  new ScrollMagic.Scene({
    triggerElement: ".section-home-about",
    triggerHook: 0.4,
  })
    .on("start", function () {
      infoSection();
    })

    // .addIndicators()
    .addTo(controller);

  function infoSection() {
    if (countWidget == false) {
      var count1 = new ClientPlus("#num1", 50, 1500);
      var count2 = new ClientPlus("#num2", 10, 1500);
      var count3 = new ClientPlus("#num3", 2, 1500);
      var count4 = new ClientPlus("#num4", 11, 1500);
      countWidget = true;
    }
  }

  // ------------------

  // Window Scroll animation
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var firstTop = $(".banner-wrapper").offset().top;

    var shiftDistance = firstTop * 0.5;
    $(".banner-wrapper").css(
      "transform",
      "translateY(-" + shiftDistance + "px)"
    );

    if (scroll > 100) {
      $(".header-wrapper .navbar").addClass("gray");
    } else {
      $(".header-wrapper .navbar").removeClass("gray");
    }
  });
});
