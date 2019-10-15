$(document).ready(function() {
    var show = true;
    var countbox = ".stats";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.us-m').css('opacity', '1');
            $('.us-m').spincrement({
                thousandSeparator: "",
                duration: 3200
            });

            show = false;
        }
    });

    $('.mobile-tab').hide();
    $('#burg').on('click',function(){
        $('.mobile-tab').slideToggle(500);
    })

    $('#carousel-1').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed: 3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            },
            1352:{
                items:1
            }
        }
    })

    var defaults = {
        containerID: 'toTop', 
        containerHoverID: 'toTopHover', 
        scrollSpeed: 1200,
        easingType: 'linear'
        };
    $().UItoTop({ easingType: 'easeOutQuart' });

    $( "#target-1" ).click(function() {
       $('.movie').addClass('d-none');
       $('#movie-1').removeClass('d-none');
    });

    $( "#target-2" ).click(function() {
        $('.movie').addClass('d-none');
        $('#movie-2').removeClass('d-none');
    });
    $( "#target-3" ).click(function() {
        $('.movie').addClass('d-none');
        $('#movie-3').removeClass('d-none');
    });
    $( "#target-4" ).click(function() {
        $('.movie').addClass('d-none');
        $('#movie-4').removeClass('d-none');
    });
       
    
    
    
    $('.ab').on('click',function(){
        $(this).parent().toggleClass('abv',300);
    })
    
});
function slowScroll(id){
    var offset = 0;
    $('body,html').animate({
    scrollTop: $(id).offset().top - offset}
    , 1500);
    return false;
}
   

   
