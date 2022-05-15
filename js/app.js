$(function () {
    
    $(window).on('scroll', function () {
        $('#backToTop').show();
 
 
       var scrollSize = $(window).scrollTop()
 
       if (scrollSize > 500) {
          $('#backToTop').css({
             bottom: '40px',
             opacity:1
          });
       } else {
          $('#backToTop').css({
             bottom: '500px',
             opacity:0
          });
       }
    })
 
    $('#backToTop').on('click', function () {
       $('html, body').animate({
          scrollTop:0,
       },1000)
    })
 
    //Menu Animation
    $(window).on("scroll", function () {
      var scrollSize = $(window).scrollTop();
  
      if (scrollSize > 65) {
        $("#header").addClass("active_menu");
      } else {
        $("#header").removeClass("active_menu");
      }
    });
  
    //Preloader
    $(window).on("load", function () {
    $(".preloader").fadeOut(500);
    });
  //end
  //slide
    $('.test_slider').slick({
        autoplay:true,
        autoplaySpeed: 1200,
     });
     //fade
     $('.fade').slick({
       dots: true,
       infinite: true,
       speed: 700,
       fade: true,
       cssEase: 'linear'
     });
 
     
 $('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
  });
 
  
  
  
  
  });