$(function () {
    "use strict";

    // trigger nice scroll
    $("body").niceScroll({
        cursorcolor:"#f7600e",
        cursorborder:"none",
        cursorwidth:"9px",
        zindex: 9
    });

    // change header height
    $(".header").height($(window).height());

    // Scroll to Our Works
    $(".header .our-works").click(function () {
        $("html, body").animate({
            scrollTop : $(".our-work").offset().top
        }, 1500);
    });

    // Scroll to Hire Us
    $(".header .hire-us").click(function () {
        $("html, body").animate({
            scrollTop : $(".contact").offset().top
        }, 2000);
    });

    // Scroll To Featuries
    $(".header .arrow i").click(function () {
        $("html, body").animate({
            scrollTop : $(".featuries").offset().top
        }, 1200);
    });

    // Show hidden items from work
    $(".show-more").click(function () {
        $(".our-work .hidden").fadeIn();
    });

    // Check Testimonials
    var leftArrow = $(".testim .fa-chevron-left"),
        rightArrow = $(".testim .fa-chevron-right");

    function checkClients() {

        $('.client:first').hasClass("active") ? leftArrow.fadeOut(1) : leftArrow.fadeIn();

        $('.client:last').hasClass("active") ? rightArrow.fadeOut(1) : rightArrow.fadeIn();
    }
    checkClients();

    $(".testim i").click(function () {

        if($(this).hasClass("fa-chevron-right")){

            $(".testim .active").fadeOut(100, function () {

                $(this).removeClass("active").next(".client").addClass("active").fadeIn();

                checkClients();
            });
        } else {

            $(".testim .active").fadeOut(100, function () {

                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();

                checkClients();
            });
        }
    });

});