/* Author: 
Inayatullah
*/
/* Author: 
Inayatullah
*/
// header background changing on some scroll 
const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
  if (window.scrollY > header.offsetHeight + 50) {
    header.classList.add('scroll');
  } else {
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

//form validation start here
const form = document.querySelector('.form'),
  fullName = document.querySelector('.full-name'),
  email = document.querySelector('.email'),
  subject = document.querySelector('.subject'),
  messageBox = document.querySelector('.message');
let isValid;
const nameRegex = /^([A-Za-z]+)?([A-Za-z ]+)$/,
  emailRegex = /^([A-Za-z][A-Za-z0-9\-\_\.]+[A-Za-z0-9])\@([A-Za-z]{2,})\.([A-Za-z]{2,})$/,
  commonRegex = /^[A-Za-z]+$/;

//form validation on submit start
form.addEventListener('submit', function validateForm(e) {
  e.preventDefault();
  validateInput(fullName, nameRegex);
  validateInput(email, emailRegex);
  validateInput(subject, commonRegex, 10, 30);
  validateInput(messageBox, commonRegex, 10, 250);

  let error = document.querySelectorAll('.error');
  console.log(error);
  if (error.length == 0) {
    const successMsg = document.createElement('div'),
      contactSection = document.querySelector('.contact');
    successMsg.className = "success-msg";
    successMsg.innerText = "Your Message Has Been Sent Successfully";
    contactSection.appendChild(successMsg);
    setTimeout(function () {
      successMsg.remove();
    }, 3000);
    form.reset();
  }
});

//function for validating inputs in form start
function validateInput(input, regex = "", minLimit = 4, maxLimit = 25) {
  console.log('here');
  isValid == true;
  let error = input.parentElement.querySelector('.error');
  if (error) {
    error.remove();
  }
  if (input.value == "") {
    appendError(input, input.name + " is required");
    return isValid = false;
  }
  else if (input.value.length < minLimit) {
    appendError(input, `minimum ${minLimit} character needed`);
    return isValid = false;
  }
  else if (input.value.length > maxLimit) {
    appendError(input, `maximum ${maxLimit} character allowed`);
    return isValid = false;
  }
  else if (!regex.test(input.value)) {
    appendError(input, "Enter valid " + input.name);
    return isValid = false;
  }
};

//append error span for inputs in form
function appendError(input, errorMsg) {
  let inputBox = input.parentElement;
  console.log(inputBox);
  let errorSpan = document.createElement('span');
  errorSpan.className = "error";
  errorSpan.innerText = errorMsg;
  inputBox.appendChild(errorSpan);
}
//form validation end here

//modal and slider for menu section 
