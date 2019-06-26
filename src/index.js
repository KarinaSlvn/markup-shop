// import "@babel/polyfill";
let slideIndex = 1
const bannerDots = document.querySelectorAll('.banner .dots .dot')
const sliderDots = document.querySelectorAll('.slider .dots .dot')
const bannerSlides = document.querySelectorAll('.banner .slide')
const sliderSlides = document.querySelectorAll('.slider .slide')

const currentSlide = (slideIndex, dots, slides) => {
    showSlides(slideIndex, dots, slides)
}

const showSlides = (slideIndex, dots, slides) => {
    if (slideIndex > slides.length) slideIndex = 1
    if (slideIndex < 1) slideIndex = slides.length;
    [...slides].map(slide => slide.style.display = 'none');
    [...dots].map(dot => dot.className = dot.className.replace(' active', ''))
    slides[slideIndex - 1].style.display = 'flex'
    dots[slideIndex - 1].className += ' active';
    [...dots].map((dot, index) => dot.addEventListener('click', () => currentSlide(index + 1, dots, slides)))
}

showSlides(slideIndex, bannerDots, bannerSlides)
showSlides(slideIndex, sliderDots, sliderSlides)

const carousel = document.querySelector('[data-target=\'carousel\']')
const card = carousel.querySelector('[data-target=\'card\']')
const leftButton = document.querySelector('[data-action=\'slideLeft\']')
const rightButton = document.querySelector('[data-action=\'slideRight\']')
const carouselWidth = carousel.offsetWidth
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0])
const cardCount = carousel.querySelectorAll('[data-target=\'card\']').length

let offset = 0
const maxX = -((cardCount / 3) * carouselWidth + (cardMarginRight * (cardCount / 3)) - carouselWidth - cardMarginRight)

leftButton.addEventListener('click', function () {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight
        carousel.style.transform = `translateX(${offset}px)`
    }
})

rightButton.addEventListener('click', function () {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight
        carousel.style.transform = `translateX(${offset}px)`
    }
})

const btnOpenBasket = document.querySelectorAll('.custom-links .cart');
const btnCloseBasket = document.getElementsByClassName('footer-checkout')[0];

const btnOpenMenu = document.getElementsByClassName('burger-menu');
const btnCloseMenu = document.getElementsByClassName('close-modal-menu');

const openModal = (nameModal) => {
    [...document.getElementsByClassName(nameModal)].forEach(modal => modal.style.display = 'flex');
    [...document.getElementsByClassName('overlay')].forEach(overlay => overlay.style.display = 'flex');
}
const closeModal = (nameModal) => {
    [...document.getElementsByClassName(nameModal)].forEach(modal => modal.style.display = 'none');
    [...document.getElementsByClassName('overlay')].forEach(overlay => overlay.style.display = 'none');
}
btnCloseBasket.addEventListener('click', () => closeModal('modal-basket'));
[...btnOpenBasket].forEach(btn => btn.addEventListener('click', () => openModal('modal-basket')));

[...btnCloseMenu].forEach(btn => btn.addEventListener('click', () => closeModal('modal-menu')));
[...btnOpenMenu].forEach(btn => btn.addEventListener('click', () => openModal('modal-menu')));

window.onclick = (event) => {
    if (event.target.classList.contains('overlay')) {
        [...document.getElementsByClassName('modal-basket')].forEach(modal => modal.style.display = 'none');
        [...document.getElementsByClassName('modal-menu')].forEach(modal => modal.style.display = 'none');
        [...document.getElementsByClassName('overlay')].forEach(overlay => overlay.style.display = 'none');
    }
}

const btnOpenSubMenu = document.querySelectorAll('.menu-link .open-link');
const toggleModal = (target) => {
    if (target.innerText === '+') {
        target.innerText = '-';
        target.parentNode.nextElementSibling.style.display = 'flex';
    } else {
        target.innerText = '+';
        target.parentNode.nextElementSibling.style.display = 'none';
    }
}

btnOpenSubMenu.forEach(btn => btn.addEventListener('click', ({target}) => {
    toggleModal(target);
    [...document.getElementsByClassName('menu-content')].forEach(menu => {
        if(menu.parentNode.style.display === 'flex'){
            if (menu.offsetHeight > 400) {
                menu.classList.add('scroll');
                [...document.getElementsByClassName('menu__footer')].forEach(footer => footer.style.display = 'none');
            } else {
                menu.classList.remove('scroll');
                [...document.getElementsByClassName('menu__footer')].forEach(footer => footer.style.display = 'flex');
            }
        }
    });
}));