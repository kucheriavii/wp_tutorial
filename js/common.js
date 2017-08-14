$(document).ready(function() {

    function heightDetect(){
        $('.main_head').css('height', $(window).height());
    }

    heightDetect();

    $(window).resize(function () {
        heightDetect();
    });
});

$(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
});
$(".top_mnu ul a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".top_mnu li a").removeClass("fadeInUp animated");
    $(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function () {
    if ($(".top_mnu").is(':visible')) {
        $(".top_mnu").fadeOut(600);
        $(".top_mnu li a").removeClass("fadeInUp animated");
    } else {
        $(".top_mnu").fadeIn(600);
        $(".top_mnu li a").addClass("fadeInUp animated");
    }
});
/*
$(".top_mnu li").sliphover({
    target: "a",
    backgroundColor: "rgba(255, 255, 255, .05)"
});
*/
//preloader
$(window).load(function() {
    $('.loaderInner').fadeOut();
    $('.loader').delay(400).fadeOut("slow");
});