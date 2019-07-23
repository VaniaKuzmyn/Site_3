"use strict";

$(document).ready(function () {
  
   /* Products Slick Slider */
   $('.product-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    rows: 2,
    autoplay: true,
    autoplay: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
      
    ]
  });
 


  /* Menu scroll on Click */
  $(".menu-item-just").click(function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top

    }, 1500, () => {
      $(".menu-item-just").removeClass('menu-item_active');
      $(this).addClass('menu-item_active');
    });
  });

  /* Menu Activate on load */
  let id;
  let sections = $('.scrollTo');
  for(let i = sections.length - 1; i >= 0 ; i--){
    id = sections.eq(i).attr('id');
    if(window.pageYOffset >= sections.eq(i).offset().top-10
      ){
        $(`.menu-item-just[href="#${id}"]`).addClass('menu-item_active');
        break;
      }         
  }
  
    /* Header Slick Slider */
    $('.header-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="tagline-arrow tagline-prev"><</button>',
        nextArrow: '<button type="button" class="tagline-arrow tagline-next">></button>',
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
      });

        /* Different speed header slider */
        var $slideshow = $('.header-inner');
        var ImagePauses = [3000, 1500, 750];
        $('.header-inner').on('afterChange', function(event, slick, currentSlide) {
          $slideshow.slick('slickSetOption', 'autoplaySpeed', ImagePauses[currentSlide], true);
        });


     

    /* Map full background */
  $('.map iframe').css(
    {'width': '100%', 'height': '100%'}
    );




    
    /* Burger Menu */
  $('.burger').on('click', function(event){
    $('.nav').toggleClass('nav-active');
    $('.burger').toggleClass('burger-active');
  })
  if ($(window).width() <= 1024){
    $('.nav').addClass('display');
  }


  
  $( window ).resize(function() {

    /* Burger Menu adaptive on resize */
    if($(window).width() > 1024
      && $('.nav').hasClass('display')
    ){
      $('.nav').removeClass('display');
      $('.nav').removeClass('nav-active');
      $('.burger').removeClass('burger-active');
    } else if($(window).width() <= 1024
      && !$('.nav').hasClass('display')
    ){
      $('.nav').addClass('display')
    }

  });

  $(window).scroll(function () {

    /* Menu Activate on scroll */ 
  function addClass () {
    $('.menu-item-just').removeClass('menu-item_active');
    $(`.menu-item-just[href="#${id}"]`).addClass('menu-item_active');
  }
for(let i = sections.length - 1; i >= 0 ; i--){
  id = sections.eq(i).attr('id');

  if(window.pageYOffset >= sections.eq(i).offset().top-30
    && !$(`.menu-item-just[href="#${id}"]`).hasClass('menu-item_active')
    ){
      if( i == sections.length - 1){
        addClass();
      } else if( window.pageYOffset <= sections.eq(i+1).offset().top-30 ){
        addClass();
      }
      break;
    }         
}


/* Section About Us Animate skill bar */ 
if ( window.pageYOffset + window.innerHeight - 150 >= $('.progress-box').offset().top ){
  $('.progress-bar').addClass('bar-active');
}

})



})