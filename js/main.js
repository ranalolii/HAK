(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);



// slideshow

//Activities
// var slideIndex = 1;
// showDivs(slideIndex, 'activites-slider', 'mySlides');

// function plusDivs(n) {
//   showDivs(slideIndex += n, 'activites-slider', 'mySlides');
// }

// function showDivs(n, sliderClass, slideClass) {
//   var i;
//   var x = document.querySelectorAll(`.${sliderClass} .${slideClass}`);
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }



// Swiper Partner

// First Swiper instance
const mainSwiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
});

// Team Swiper instance
// var Teamswiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 300,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });






//   Application start
var totalSlides = document.querySelectorAll('.mySwiper .swiper-slide').length; // Get the total number of slides
var middleSlide = Math.floor(totalSlides / 2); // Calculate the index of the middle slide

var Teamswiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: middleSlide, // Start from the middle slide
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.productAPP');
    const detailsContainer = document.querySelector('.product-details-container-APP');
    const detailsSections = document.querySelectorAll('.product-details-App');
    
    products.forEach(productAPP => {
        productAPP.addEventListener('click', () => {
            const productId = productAPP.getAttribute('data-product');
            
            // Show the details container
            detailsContainer.style.display = 'block';
            
            // Hide all details sections
            detailsSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the clicked product's details
            document.getElementById(`details-${productId}`).classList.add('active');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');

    images.forEach(image => {
        image.addEventListener('touchstart', () => {
            image.classList.add('touched');
        });

        image.addEventListener('touchend', () => {
            image.classList.remove('touched');
        });
    });
});


//NewsLetter Start
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYntPRJsZ37orH6Z3QlAo0MVk3dgN2VJF0UMGzVrD-zh1Bh4fdWpN27HOFRekICRa_/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""  
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

//NewsLetter End

