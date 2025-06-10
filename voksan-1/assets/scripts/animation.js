jQuery(document).ready(function ($) {
  var controller = new ScrollMagic.Controller();
  var countWidget = false;
  var locationCountWidget = false;

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

  // ----------------------

  new ScrollMagic.Scene({
    triggerElement: ".section-home-project-locaion",
    triggerHook: 0.4,
  })
    .on("start", function () {
      locationCountSection();
    })

    // .addIndicators()
    .addTo(controller);

  function locationCountSection() {
    if (locationCountWidget == false) {
      var count1 = new ClientPlus("#l_num1", 20, 1500);
      var count2 = new ClientPlus("#l_num2", 15, 1500);
      var count3 = new ClientPlus("#l_num3", 5, 1500);
      locationCountWidget = true;
    }
  }

  // ----------------------

  // Latest Project Zoom Style ---------------
  TweenMax.set("#project_1 #bg_layer", { backgroundSize: "125% 125%" });

  var zoomTween = TweenMax.to("#project_1 #bg_layer", 0.5, {
    backgroundSize: "100% 100%",
    ease: Linear.easeNone,
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#project_1",
    duration: 400,
  })
    .setTween(zoomTween)
    .addTo(controller);

  // ------------------

  // Latest Project Zoom Style ---------------
  TweenMax.set("#project_2 #bg_layer", { backgroundSize: "125% 125%" });

  var zoomTween = TweenMax.to("#project_2 #bg_layer", 0.5, {
    backgroundSize: "100% 100%",
    ease: Linear.easeNone,
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#project_2",
    duration: 400,
  })
    .setTween(zoomTween)
    .addTo(controller);

  // ------------------------

  // Footer Video -----------
  // TweenMax.set("#footer_video #video", { translateY: 0 });

  var footerTween = TweenMax.to("#footer_video #video", 0.5, {
    transform: "translate3d(0,-100px,0)",
    percentY: 100,
    ease: Linear.easeNone,
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#footer_video",
    duration: 400,
  })
    .setTween(footerTween)
    .addTo(controller);

  //---
  //---
  //---

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 100) {
      $(".header-wrapper .navbar").addClass("gray");
    } else {
      $(".header-wrapper .navbar").removeClass("gray");
    }
  });

  // Window Scroll animation
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var firstTop = $(".banner-wrapper").offset().top;

    var shiftDistance = firstTop * 0.5;
    $(".banner-wrapper").css(
      "transform",
      "translateY(-" + shiftDistance + "px)"
    );
  });
});
