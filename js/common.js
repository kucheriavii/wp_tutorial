$(document).ready(function() {

    function heightDetect(){
        $('.main_head').css('height', $(window).height())
    }

    heightDetect();

    $(window).resize(function () {
        heightDetect()
    })
});

$(".toggle_mnu, .menu_item").click(function() {
    $(".sandwich").toggleClass("active");
});

//preloader
$(window).load(function() {
    $('.loaderInner').fadeOut();
    $('.loader').delay(400).fadeOut("slow");
});