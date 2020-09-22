

// ======================menu fixed===================================
$(window).scroll(function(){
    var scrollamount = $(window).scrollTop()
    if(scrollamount > 10){
      $(".menu").addClass("fixed")
    }else{
        $(".menu").removeClass("fixed")
      }
      if(scrollamount > 500){
        $(".btop").fadeIn();
      }else{
        $(".btop").fadeOut();
      }
})

  $(".btop").click(function(){
    $("html,body").animate({
      scrollTop:0
    },1000)
    }),


  $(".navbar-collapse a").click(function(){
    $(".navbar-collapse").collapse('hide')
  })

// ======================menu fixed===================================

//slider js @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    }
  ]
});

AOS.init();

