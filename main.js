const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// box shadow header

function changeHeaderScroll() {
    const navHeight = header.offsetHeight;

    if(this.window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

// slider swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
    
  })

// scroll reveal

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact ul li,
    footer .brand, footer .social`,
     { interval: 100}
)

// back to top button
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
}

// listener scroll window
window.addEventListener('scroll', function() {
    changeHeaderScroll()
    backToTop()
})