const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Function to handle animations
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const elementsToAnimate = entry.target.querySelectorAll('h1, p, img, h2, ul, a');
          elementsToAnimate.forEach((element, index) => {
              setTimeout(() => {
                  element.classList.add('animate');
              }, index * 100);
          });
          observer.unobserve(entry.target);
      }
  });
}

// Create a single observer that can be reused
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.2,
  rootMargin: '50px'
});

// Observe the services-hero section
const servicesHero = document.querySelector('.services-hero');
if (servicesHero) {
  observer.observe(servicesHero);
}

// Load json data for service categories
fetch('data/services.json')
  .then(response => response.json())
  .then(services => {
      const container = document.querySelector('.service-categories');

      services.forEach(service => {
          const serviceDiv = document.createElement('div');
          serviceDiv.classList.add('service-category');

          let innerHTML = `
              <img src="${service.image}" alt="${service.name}" width="300" height="200" loading="lazy">
              <h2>${service.name}</h2>
              <p>${service.description}</p>
              <ul>
                  ${service.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
              <ul>
                  ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
              </ul>
              <a href="https://www.facebook.com/profile.php?id=61567562983142" target="_blank">
                  <button>${service.cta}</button>
              </a>
          `;

          serviceDiv.innerHTML = innerHTML;
          container.appendChild(serviceDiv);
          
          // Observe each service category
          observer.observe(serviceDiv);
      });
  });

// Dynamic Year in Footer
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Update the HTML