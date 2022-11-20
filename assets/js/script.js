/* Author: 
Inayatullah
*/
/* Author: 
Inayatullah
*/
// header background changing on some scroll 
const header = document.querySelector('.header');

window.addEventListener("scroll" , function (){
    if (window.scrollY > header.offsetHeight + 50 ) {
        header.classList.add('scroll');
    }else {
        header.classList.remove('scroll');
    }
});

//hamburger js start
const navbar = document.querySelector('.nav'),
    hamburger = document.querySelector('.hamburger'),
    ctaBtn = document.querySelector('.cta'),
    html = document.querySelector('html');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        ctaBtn.classList.toggle('active');
        html.classList.toggle('remove-scroll');
    });
//hamburger js end

// banner slider js start

$('.banner-list').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
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
// banner slider js start

// testimonial slider js start 

$('.testimonial-list').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
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
// testimonial slider js start 

