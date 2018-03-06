$( document ).ready(function(){
  $('.modal').modal()
  $(".button-collapse").sideNav({edge: 'right'})
  $('.articles').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
