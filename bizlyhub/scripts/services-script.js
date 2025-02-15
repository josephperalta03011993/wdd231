const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Create a single observer with better performance options
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          requestAnimationFrame(() => {
              const elementsToAnimate = entry.target.querySelectorAll('[data-animate]');
              elementsToAnimate.forEach((element, index) => {
                  // Reduced delay and using requestAnimationFrame
                  setTimeout(() => {
                      element.classList.add('animate');
                  }, index * 50); // Reduced from 100ms to 50ms
              });
          });
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0.1, // Reduced threshold for earlier loading
  rootMargin: '50px'
});

// Observe the services-hero section
const servicesHero = document.querySelector('.services-hero');
if (servicesHero) {
  // Add data-animate attributes to elements we want to animate
  const heroElements = servicesHero.querySelectorAll('h1, p');
  heroElements.forEach(el => el.setAttribute('data-animate', ''));
  observer.observe(servicesHero);
}

// Load json data
fetch('data/services.json')
  .then(response => response.json())
  .then(services => {
      const container = document.querySelector('.service-categories');
      const fragment = document.createDocumentFragment(); // Use document fragment

      services.forEach(service => {
          const serviceDiv = document.createElement('div');
          serviceDiv.classList.add('service-category');

          serviceDiv.innerHTML = `
              <img src="${service.image}" alt="${service.name}" width="300" height="200" loading="lazy" data-animate>
              <h2 data-animate>${service.name}</h2>
              <p data-animate>${service.description}</p>
              <ul data-animate>
                  ${service.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
              <ul data-animate>
                  ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
              </ul>
              <a href="https://www.facebook.com/profile.php?id=61567562983142" target="_blank" data-animate>
                  <button>${service.cta}</button>
              </a>
          `;

          fragment.appendChild(serviceDiv);
          observer.observe(serviceDiv);
      });

      container.appendChild(fragment); // Single DOM update
  });

// Dynamic Year in Footer
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Update the HTML