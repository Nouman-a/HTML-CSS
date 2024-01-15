/*=============== SEARCH ===============*/

/*=============== SHOW MENU ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Menu show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Menu hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button');
const loginContent = document.getElementById('login-content');
const loginClose = document.getElementById('login-close');

// Show login page

if(loginButton){
    loginButton.addEventListener('click', () =>{
loginContent.classList.add('show-login');
    });
};

// close login bar

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login');
    });
};

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let  swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
         delay: 3000,
         disableOnInteracton: 'false',
    },

    breakpoints:{
        1220:{
            spaceBetween: -32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/

let  swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'false',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        1150:{
          slidesPerView: 4,
          centeredSlides: false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/
let  swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints:{
        1150:{
          slidesPerView: 3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/
let  swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
          slidesPerView: 3,
          centeredSlides: false,
        },
    }
  });


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
