//welcome
const fadeInElements = document.querySelectorAll('.xwelcome');

function xwelcomeOnScroll() {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.style.opacity = '1';
        }
    });
}

document.addEventListener('scroll', xwelcomeOnScroll);

//change elon

const slideInImage = document.querySelector('.elon');

function slideInOnScroll() {
    const imageTop = slideInImage.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imageTop < windowHeight) {
        slideInImage.style.opacity = '1';
        slideInImage.style.transform = 'translateX(0)';
    }
}

document.addEventListener('scroll', slideInOnScroll);

//change image

function changeImage() {
    var image = document.getElementById('image');
    image.src = 'xcorp.svg';
}

function restoreImage() {
    var image = document.getElementById('image');
    image.src = 'twitter.svg'; 
}

//change tweet

const InImages = document.querySelectorAll('.slide-in');

function InOnScroll() {
    InImages.forEach((image, index) => {
        const imageTop = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imageTop < windowHeight) {
            setTimeout(() => {
                image.style.opacity = '1';
                image.style.transform = 'translateX(0)';
            }, index * 300); 
        }
    });
}

document.addEventListener('scroll', InOnScroll);

