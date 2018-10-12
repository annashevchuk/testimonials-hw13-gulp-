$(document).ready(function(){
  $('.row-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
  	slidesToShow: 5,
 		slidesToScroll: 1,
  	autoplaySpeed: 3000,
  	prevArrow: '<i class="fas fa-angle-left left-arrow"></i>',
  	nextArrow: '<i class="fas fa-angle-right right-arrow"></i>',
  	dots: false,
    integer: 3,
  	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });


  


$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});