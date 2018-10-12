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
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 4,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

});
