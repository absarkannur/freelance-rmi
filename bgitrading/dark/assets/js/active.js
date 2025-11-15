/*
Template: Busico - Construction Business Multipurpose HTML5 Template
Author: RRDevs
*/

(function ($) {
    "use strict";

    $(window).on('load', function (event) {
        $('#preloader').delay(1000).fadeOut(500);
    });


    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(500);
    });

    $(document).ready(function () {

        // Mobile Menu Js
        $("#mobile-menu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "1199",
            meanExpand: ['<i class="fal fa-plus"></i>'],
            meanContract: ['<i class="fal fa-minus"></i>'],
        });
        $("#mobile-menu-media-all").meanmenu({
            meanMenuContainer: ".mobile-menu-media-all",
            meanScreenWidth: "8000",
            meanExpand: ['<i class="fal fa-plus"></i>'],
            meanContract: ['<i class="fal fa-minus"></i>'],
        });

        // Sidebar Js
        $(".sidebar-toggle-btn").on("click", function () {
            $(".sidebar__area").addClass("sidebar-opened");
            $(".body-overlay").addClass("opened");
        });
        $(".sidebar__close-btn").on("click", function () {
            $(".sidebar__area").removeClass("sidebar-opened");
            $(".body-overlay").removeClass("opened");
        });

        // Side Info Js
        $(".side-info-close,.offcanvas-overlay").on("click", function () {
            $(".side-info").removeClass("info-open");
            $(".offcanvas-overlay").removeClass("overlay-open");
        });
        $(".side-toggle").on("click", function () {
            $(".side-info").addClass("info-open");
            $(".offcanvas-overlay").addClass("overlay-open");
        });

        $(".offset__btn").on("click", function () {
            $(".offset-content-wrapper").addClass("offset-show");
        });
        $(".offset-content-close").on("click", function () {
            $(".offset-content-wrapper").removeClass("offset-show");
        });

        $(".search-open-btn").on("click", function () {
            $(".search__popup").addClass("search-opened");
        });

        $(".search-close-btn").on("click", function () {
            $(".search__popup").removeClass("search-opened");
        });

        $('.container').imagesLoaded(function () {
            $('.portfolio-cat-filter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });

        var catButton = '.portfolio-cat-filter button';

        $(catButton).on('click', function () {
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        // Scroll to bottom then close navbar
        $(window).scroll(function () {
            if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                $(".offcanvas__area").removeClass("info-open");
                $(".offcanvas-overlay").removeClass("overlay-open");
                $(".search__popup").removeClass("search-opened");
            }
        });

        $(".hero-1 .hero-slider-active").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>PREV', 'Next<i class="fal fa-long-arrow-right"></i>'],
        });

        $(".hero-slider-2").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            animateOut: 'fadeOut',
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        });

        $(".hero-slider_3").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            // navClass: ['<div class="owl_nav_2"></div>'],
            animateOut: 'fadeOut',
            navText: ['<div><img src="./assets/img/home6/arrow.png" alt><p>PREV</p></div>', '<div><img src="./assets/img/home6/arrow_02.png" alt><p>NEXT</p></div>'],
        });

        const $owlCarousel = $(".agency-slider-active").owlCarousel({
            items: 1,
            dots: true,
            loop: true,
            autoplayTimeout: 9000,
            autoplay: true,
        });

        $(".owl-carousel").on("initialized.owl.carousel", () => {
            setTimeout(() => {
                $(".owl-item.active .animated-text").addClass("is-transitioned");
            }, 200);
        });

        $owlCarousel.on("changed.owl.carousel", e => {
            $(".animated-text").removeClass("is-transitioned");

            const $currentOwlItem = $(".owl-item").eq(e.item.index);
            $currentOwlItem.find(".animated-text").addClass("is-transitioned");

            const $target = $currentOwlItem.find(".hero-contents");
        });

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        });

        $(".brand-carousel-active").owlCarousel({
            margin: 80,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

                1191: {
                    items: 5
                },
            }
        });

        $(".brand-carousel-active-2").owlCarousel({
            margin: 80,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 5
                },

                1191: {
                    items: 6
                },
            }
        });

        $(".brand-carousel-2").owlCarousel({
            margin: 50,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

                1191: {
                    items: 6
                },
            }
        });

        $(".brand-carousel-3").owlCarousel({
            margin: 50,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

                1191: {
                    items: 6
                },
            }
        });

        $(".global-carousel").owlCarousel({
            margin: 80,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

            }
        });

        $(".project-showcase-carousel").owlCarousel({
            margin: 30,
            loop: true,
            center: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 2
                },

                1191: {
                    items: 3
                },
            }
        });

        $(".portfolio-showcase-carousel-active").owlCarousel({
            margin: 30,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            dots: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                },

                1191: {
                    items: 3
                },

                1400: {
                    items: 5
                },
            }
        });

        $(".project-carousel-card-active").owlCarousel({
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
            autoplayTimeout: 6000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },

                1191: {
                    items: 3
                },

                1600: {
                    items: 4
                },
            }
        });

        $(".project__slider").owlCarousel({
            margin: 30,
            loop: true,
            autoplayTimeout: 6000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 500 up
                650: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },

                1191: {
                    items: 3
                },

                1600: {
                    items: 4
                },
            }
        });

        $(".portfolio-carousel-active").owlCarousel({
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            center: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                    margin: 10,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    margin: 30,
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    margin: 30,
                },

                1400: {
                    items: 4,
                    margin: 30,
                    center: false,
                }
            }
        });

        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            center: true,
        });

        $(".testimonial-carousel-active").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-down"></i>', '<i class="fal fa-long-arrow-up"></i>'],
        });

        $(".service-gallery").owlCarousel({
            items: 1,
            dots: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        });

        /* =============================================
            # slick carousel init
         ===============================================*/

        $('.our__testimonial__widget').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.our__testimonial__img',
        });
        $('.our__testimonial__img').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.our__testimonial__widget',
            arrows: false,
            focusOnSelect: true,
        });

        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        // Sticky Menu
        $(window).scroll(function () {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if ("header") {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        new WOW().init();

        $('.side-menu-toggle, .offcanvas-btn').on('click', function () {
            $('.offset-menu').addClass('show');
        });

        $('#offset-menu-close-btn').on('click', function () {
            $('.offset-menu').removeClass('show');
        });

        $('.search-btn').on('click', function () {
            $('.search-box').toggleClass('show');
        });


    }); // end document ready function


    /*==========================
        tab Init
    ============================*/
    // Show the first tab and hide the rest
    $('#tabs-nav button:first-child').addClass('active');
    $('.tab-content:first').show();
    $('.tab-content:last').hide();

    // Click function
    $('#tabs-nav button').click(function () {
        $(this).addClass('active');
        $('.tab-content:first').hide();
        $('.tab-content:last').show();

        return false;
    });



    $(".odometer").waypoint(
        function () {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                var element = $(this);
                setTimeout(function () {
                    element.html(countNumber);
                }, 1000); // 1000 milliseconds delay (1 second)
            });
        },
        {
            offset: "100%",
            triggerOnce: true,
        }
    );

    // update-start--------------------------------------------------------------------

    // data bg img
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // odometer-js start------------------------------------------------
    if ($('.counter-7__odometer-1').length > 0) {

        const createOdometer = (el, value) => {
            const odometer = new Odometer({
                el: el,
                value: 0,
            });

            let hasRun = false;

            const options = {
                threshold: [0, 0.9],
            };

            const callback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!hasRun) {
                            odometer.update(value);
                            hasRun = true;
                        }
                    }
                });
            };

            const observer = new IntersectionObserver(callback, options);
            observer.observe(el);
        };

        const counter7Odometer1 = document.querySelector(".counter-7__odometer-1");
        createOdometer(counter7Odometer1, 45);

        const counter7Odometer2 = document.querySelector(".counter-7__odometer-2");
        createOdometer(counter7Odometer2, 16);

        const counter7Odometer3 = document.querySelector(".counter-7__odometer-3");
        createOdometer(counter7Odometer3, 96);

        const counter7Odometer4 = document.querySelector(".counter-7__odometer-4");
        createOdometer(counter7Odometer4, 14);
    }
    // odometer-js end------------------------------------------------


    // element-7__active start
    if (document.querySelector(".element-7__active")) {
        var swiper = new Swiper(".element-7__active", {
            slidesPerView: "auto",
            loop: true,
            freemode: false,
            centeredSlides: true,
            allowTouchMove: false,
            speed: 3000,
            autoplay: {
                delay: 0.1,
                disableOnInteraction: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 6,
                },
                1400: {
                    slidesPerView: 8,
                },
                1600: {
                    slidesPerView: 8,
                },
                1800: {
                    slidesPerView: 9,
                },
            },
        });
    }

    // project-7__active start
    if (document.querySelector(".project-7__active")) {
        var project = new Swiper('.project-7__active', {
            slidesPerView: 4,
            loop: true,
            autoplay: true,
            arrow: true,
            spaceBetween: 4,
            speed: 1500,
            centeredSlides: false,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }

    // brand-8__active start
    if (document.querySelector(".brand-8__active")) {
        var brand = new Swiper('.brand-8__active', {
            slidesPerView: 5,
            loop: true,
            autoplay: true,
            arrow: true,
            spaceBetween: 0,
            speed: 1500,
            centeredSlides: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
        });
    }

    // testimonial-8__active start
    if (document.querySelector(".testimonial-8__active")) {
        var testimonial = new Swiper('.testimonial-8__active', {
            slidesPerView: 3,
            loop: true,
            autoplay: true,
            arrow: true,
            spaceBetween: 30,
            speed: 1500,
            centeredSlides: true,
            navigation: {
                nextEl: ".testimonial-8__button__next",
                prevEl: ".testimonial-8__button__prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // services-8__active start
    if (document.querySelector(".services-8__active")) {
        var services = new Swiper('.services-8__active', {
            slidesPerView: 3,
            loop: true,
            autoplay: true,
            arrow: true,
            spaceBetween: 29,
            speed: 1500,
            centeredSlides: true,
            pagination: {
                el: ".services-8__pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // banner-8__active start
    if (document.querySelector(".banner-8__active")) {
        var banner = new Swiper('.banner-8__active', {
            slidesPerView: 1,
            loop: true,
            autoplay: true,
            arrow: true,
            spaceBetween: 0,
            speed: 1200,
            delay: 3,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".banner-8__button__next",
                prevEl: ".banner-8__button__prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            },
        });
    }



    // custom-slider-------------------->
    const slider = document.querySelector(".rr-wrapper");
    if (slider) {
        for (let i = 0; i < slider.children.length; i++) {
            if (i == 0) {
                slider.children[i].classList.add("rr-slide-active");
                slider.children[i].setAttribute("data-index", i + 1);
            } else if (i == 1) {
                slider.children[i].classList.add("rr-slide-next");
                slider.children[i].setAttribute("data-index", i + 1);
            } else if (i == 2) {
                slider.children[i].classList.add("rr-slide-next-2");
                slider.children[i].setAttribute("data-index", i + 1);
            } else {
                slider.children[i].setAttribute("data-index", i + 1);
            }
        }
        const rrVSlider = () => {
            const activeSlide = slider.querySelector(".rr-slide-active");
            const nextSlide = slider.querySelector(".rr-slide-next");
            const nextSlide2 = slider.querySelector(".rr-slide-next-2");
            let lastIndex = Number(nextSlide2.getAttribute("data-index"));
            nextSlide2.classList.add("rr-slide-next");
            nextSlide.classList.add("rr-slide-active");
            activeSlide.classList.remove("rr-slide-active");
            nextSlide.classList.remove("rr-slide-next");
            nextSlide2.classList.remove("rr-slide-next-2");
            if (lastIndex == slider.children.length) {
                document.querySelectorAll(".rr-slide").forEach((element) => {
                    if (element.getAttribute("data-index") == 1) {
                        element.classList.add("rr-slide-next-2");
                    }
                });
                lastIndex = 1;
            } else {
                document.querySelectorAll(".rr-slide").forEach((element) => {
                    if (element.getAttribute("data-index") == lastIndex + 1) {
                        element.classList.add("rr-slide-next-2");
                    }
                });
                lastIndex += 1;
            }
        };
        const rrVSliderRev = () => {
            const activeSlide = slider.querySelector(".rr-slide-active");
            const nextSlide = slider.querySelector(".rr-slide-next");
            const nextSlide2 = slider.querySelector(".rr-slide-next-2");
            let lastIndex = Number(activeSlide.getAttribute("data-index"));
            activeSlide.classList.add("rr-slide-next");
            nextSlide.classList.add("rr-slide-next-2");
            nextSlide2.classList.remove("rr-slide-next-2");
            nextSlide.classList.remove("rr-slide-next");
            activeSlide.classList.remove("rr-slide-active");
            if (lastIndex == 1) {
                document.querySelectorAll(".rr-slide").forEach((element) => {
                    if (element.getAttribute("data-index") == slider.children.length) {
                        element.classList.add("rr-slide-active");
                    }
                });
                lastIndex = slider.children.length;
            } else {
                document.querySelectorAll(".rr-slide").forEach((element) => {
                    if (element.getAttribute("data-index") == lastIndex - 1) {
                        element.classList.add("rr-slide-active");
                    }
                });
                lastIndex -= 1;
            }
        };
        let autoPlay = setInterval(() => {
            rrVSlider();
        }, 5000);
        document.querySelector(".next-btn").addEventListener("click", () => {
            clearInterval(autoPlay);
            rrVSlider();
            autoPlay = setInterval(() => {
                rrVSlider();
            }, 5000);
        });
        document.querySelector(".prev-btn").addEventListener("click", () => {
            clearInterval(autoPlay);
            rrVSliderRev();
            autoPlay = setInterval(() => {
                rrVSlider();
            }, 5000);
        });
    }


})(jQuery); // End jQuery