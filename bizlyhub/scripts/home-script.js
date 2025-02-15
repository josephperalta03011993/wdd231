const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Function to handle animations
function animateElements(selector, animationClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.classList.add(animationClass);
    });
}

// Hero Section Load Animation
window.addEventListener('load', () => {
    animateElements('.hero', 'loaded'); // Add 'loaded' to the hero section
});

// Services Section Scroll Animation (Intersection Observer)
const servicesSection = document.querySelector('.services');

if (servicesSection) {
    const elementsToAnimate = servicesSection.querySelectorAll('h2, ul, img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementsToAnimate.forEach(element => {
                    element.classList.add('animate'); // Add 'animate' to individual elements
                });
                observer.unobserve(servicesSection); // Optional: Stop observing
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(servicesSection);
}

// Testimonials section scroll animation
const testimonialSection = document.querySelector('.testimonials');

if (testimonialSection) {
    const elementsToAnimate = testimonialSection.querySelectorAll('h2, .testimonials, .testimonials-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementsToAnimate.forEach(element => {
                    element.classList.add('animate'); // Add 'animate' to individual elements
                });
                observer.unobserve(testimonialSection); // Optional: Stop observing
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(testimonialSection);
}

// Testimonials Fetch and Display
fetch('data/testimonials.json') // Adjust path if needed
    .then(response => response.json())
    .then(testimonials => {
        const container = document.querySelector('.testimonials-container');

        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');

            testimonialDiv.innerHTML = `
                <img src="${testimonial.image}" alt="${testimonial.name}'s testimonial image'" width="80" height="80">
                <p>"${testimonial.testimonial}"</p>
                <h3>${testimonial.name}</h3>
            `;

            container.appendChild(testimonialDiv);
        });
    })
    .catch(error => console.error('Error fetching testimonials:', error));