jQuery(document).ready(function(){
  jQuery('.product_content').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 3.3,
    responsiveClass: true,
    responsive: [
      {                  
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.1 
        }
      },
      {                  
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5                  
        }
      },
      {                  
        breakpoint: 1024,
        settings: {
          slidesToShow: 2                                      
		}
      },
      {                  
        breakpoint: 991,
        settings: {
          slidesToShow: 1.8                                      
		}
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          arrows:false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          arrows:false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          arrows:false,
          slidesToScroll: 1
        }
      }
    ]
  });         
}); 