$(document).ready(function() {
    $(".portfolio_item").each(function (e) {
        $(this).find(".popup_content").attr("href", "#work_"+e);
        $(this).find('.port_descr').attr("id", "work_"+e);
    });
    // mixitap
    $("#portfolio_grid").mixItUp();
    $(".s_portfolio li").click(function () {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

//popup
    $(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({type:"inline", closeOnContentClick: true});
//animate effects
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

    $(".animation-1").animated("flipInY", "flipOutY");
    $(".animation-2").animated("flipInY", "flipOutY");
    $(".animation-3").animated("flipInY", "flipOutY");

    $(".left .resume-item").animated("flipInY", "flipOutY");
    $(".right .resume-item").animated("flipInY", "flipOutY");
    //$(".top_text p").animated("fadeInUp", "fadeOutDon");

    /*****************************************************/
    /*scroll to id*/
    /*****************************************************/
    $(".top_mnu ul a").mPageScroll2id();
    /***************************************************/

    function heightDetect(){
        $('.main_head').css('height', $(window).height());
    }


    heightDetect();

    $(window).resize(function () {
        heightDetect();
    });
    $("input, select, textarea").jqBootstrapValidation();
});

$(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
});
//Закриваємо меню при кліку на один з його пунктів
$(".top_mnu ul a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".top_mnu li a").removeClass("fadeInUp animated");
    $(".top_text").removeClass("h_opacity");
    $(".sandwich").toggleClass("active");
}).append("<span>");

$(".toggle_mnu").click(function () {
    if ($(".top_mnu").is(':visible')) {
        $(".top_text").removeClass("h_opacity");
        $(".top_mnu").fadeOut(600);
        $(".top_mnu li a").removeClass("fadeInUp animated");// забираємо клас з анімацією
    } else {
        $(".top_text").addClass("h_opacity");
        $(".top_mnu").fadeIn(600);
        $(".top_mnu li a").addClass("fadeInUp animated"); //додаємо анімацію
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