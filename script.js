document.querySelector('header nav ul .profile').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
})

const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel .items');
let index = 0;
function updateCarousel() {
    carouselInner.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % items.length;
    updateCarousel();
}

setInterval(nextSlide, 3000);

document.querySelector('header .container .menu .slide .items:first-child').addEventListener('click', function () {
    window.location.href = 'pendaftaran.html';
})

document.querySelector('header .container .menu .slide .items:nth-child(3)').addEventListener('click', function () {
    window.location.href = 'biaya.html';
})

document.querySelector('header .container .menu .slide .items:nth-child(4)').addEventListener('click', function () {
    window.location.href = 'jadwal.html';
})