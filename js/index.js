
$('.main-gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000
  });
  
$('.main-benefits-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false
        }
      },
    ]
  });

new WOW().init();


let btn = document.querySelector('.mobile-menu')
let burger = document.querySelector('.mobile-btn')
let nav = document.querySelector('.header-nav')
let item = document.querySelectorAll('.header-nav-item')

btn.addEventListener('click', function (e) {
    nav.classList.toggle('header-nav-mobile')
    burger.classList.toggle('mobile-btn-active')
    document.body.classList.toggle('body-scroll')
})

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function (e) {
        nav.classList.toggle('header-nav-mobile')
        burger.classList.toggle('mobile-btn-active')
        document.body.classList.toggle('body-scroll')
    })
}



