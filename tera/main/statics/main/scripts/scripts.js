document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');
    const contactMenu = document.getElementById('contactMenu');
    const contactTooltip = document.querySelector('.contact-tooltip');

    contactButton.addEventListener('click', function() {
        // Alternar la visibilidad del menú
        if (contactMenu.style.display === 'block') {
            contactMenu.style.display = 'none';
        } else {
            contactMenu.style.display = 'block';
        }
    });

    contactButton.addEventListener('mouseover', function() {
        contactTooltip.style.display = 'block';
    });

    contactButton.addEventListener('mouseout', function() {
        contactTooltip.style.display = 'none';
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!contactButton.contains(event.target) && !contactMenu.contains(event.target)) {
            contactMenu.style.display = 'none';
        }
    });
});





const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = carouselImages[0].clientWidth;

// Clonar las primeras y últimas imágenes para el efecto de bucle infinito
carouselSlide.appendChild(carouselImages[0].cloneNode(true));
carouselSlide.insertBefore(carouselImages[carouselImages.length - 1].cloneNode(true), carouselImages[0]);

// Ajustar la posición inicial para el bucle
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function updateCarousel() {
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function autoSlide() {
    counter++;
    updateCarousel();

    // Verificar si se llegó al final o al inicio del carrusel
    if (counter >= carouselImages.length + 1) {
        setTimeout(() => {
            carouselSlide.style.transition = 'none';
            counter = 1;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }, 1000); // Ajustar este valor al mismo tiempo de la transición
    }
}

// Desplazamiento automático cada 3 segundos
setInterval(autoSlide, 3500);
