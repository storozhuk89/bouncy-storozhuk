$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:800,
    lazyLoad: true,
    slideBy:2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$(function() {
    var GammaSettings = {
        // order is important!
        viewport : [ {
            width : 1200,
            columns : 5
        }, {
            width : 900,
            columns : 4
        }, {
            width : 500,
            columns : 3
        }, {
            width : 320,
            columns : 2
        }, {
            width : 0,
            columns : 2
        } ]
    };
    Gamma.init( GammaSettings );
});