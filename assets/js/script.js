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
  commonRegex = /^[A-Za-z0-9]+$/;

//form validation on submit start
form.addEventListener('submit', function validateForm(e) {
  e.preventDefault();
  validateInput(fullName, nameRegex);
  validateInput(email, emailRegex);
  validateInput(subject, commonRegex, 10, 30);
  validateInput(messageBox, commonRegex, 10, 250);

  let error = document.querySelectorAll('.error');
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
  let errorSpan = document.createElement('span');
  errorSpan.className = "error";
  errorSpan.innerText = errorMsg;
  inputBox.appendChild(errorSpan);
}
//form validation end here

//modal and slider for menu section start
const menu = document.querySelector('.menu-section'),
  menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    modal(item, index);

    const body = document.querySelector('body');
    body.addEventListener('click', function (e) {
      // next btn function
      if (e.target.classList.contains('next-control')) {
        const modalBox = document.querySelector('.modal-box');
        if (modalBox) {
          modalBox.remove();
        }
        if (index < menuItem.length - 1) {
          index++;
        } else {
          index = 0;
        }
        modal(menuItem[index], index);
      };
      // previous btn function
      if (e.target.classList.contains('prev-control')) {
        const modalBox = document.querySelector('.modal-box');
        if (modalBox) {
          modalBox.remove();
        }
        if (index == 0) {
          index = menuItem.length - 1;
        } else {
          index--;
        }
        modal(menuItem[index], index);
      };
    })
  });
})

//modal function start
function modal(item, index) {
  let imageSource = item.querySelector('.menu-image img').src,
    menuTitle = item.querySelector('.item-name').innerText;
  html.classList.add('remove-scroll');
  const modalBox = document.createElement('div');
  modalBox.className = "modal-box";
  modalBox.innerHTML = `<div class="modal-content">
          <a class="prev-control" href="#FIXME" title="Prev Item">Prev Item</a>
          <a class="next-control" href="#FIXME" title="Next Item">Next Item</a>
          <span class="close-btn">x</span>
          <figure class="modal-img">
            <img src="${imageSource}" alt="Menu image">
            <figcaption class="product-name">${menuTitle}</figcaption>
          </figure>
        </div>`
  menu.appendChild(modalBox);

  //modal close js
  const modalImage = document.querySelector('.modal-img'),
    activeModal = document.querySelector('.modal-box');
  modalImage.addEventListener('click', function (e) {
    e.stopPropagation();
  })

  activeModal.addEventListener('click', function () {
    activeModal.remove();
    html.classList.remove('remove-scroll');
  });
};
//modal function start


