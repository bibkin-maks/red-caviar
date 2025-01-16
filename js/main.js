let a = document.querySelector(".hamburger")
let b = 0
let c = document.getElementsByTagName("nav")[0]
// 80 300
let d = 80
a.addEventListener('click', function(){ 
      
        if(b == 0){
          
            for(i = 20; d < 300; d += 4 ){
                c.style.height = d + "px" ;
          
                
            }
            b = 1
          
            
        }else{
            console.log(0.3)
            for(i = 20; d >= 80; d -= 4 ){
                c.style.height = d + "px";
            }
            b = 0
        }
    })

$(document).ready(function() {
    
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    $('.order-btn').click(function() {
        $('.background').fadeIn(300);
        $('.popup').fadeIn(300);
    });

    $('.background').click(function() {
        $('.background').fadeOut(300);
        $('.popup').fadeOut(300);
    });

    $('.popup button').click(function() {
        $('.background').fadeOut(300);
        $('.popup').fadeOut(300);
    });

    $("#toCatalog").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).stop();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#catalog").offset().top - 80
        }, 1000);
    });

    $("#toPromo").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).stop();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#promo").offset().top - 80
        }, 1000);
    });

    $("#toAbout").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).stop();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top - 80
        }, 1000);
    });

    $("#toReviews").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).stop();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#reviews").offset().top - 80
        }, 1000);
    });

    $("#toDelivery").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).stop();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#delivery").offset().top - 80
        }, 1000);
    });

    $("#toContacts").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).stop();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contacts").offset().top - 80
        }, 1000);
    });

});
