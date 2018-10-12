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
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

});
