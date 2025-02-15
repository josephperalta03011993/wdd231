const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Load json data
fetch('data/services.json')
  .then(response => response.json())
  .then(services => {
    const container = document.querySelector('.service-categories');

    services.forEach(service => {
      const serviceDiv = document.createElement('div');
      serviceDiv.classList.add('service-category');

      if (service.name == "Website Design") {
        serviceDiv.innerHTML = `
        <img src="${service.image}" alt="${service.name}" width="300" height="200">
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
      } else {
        serviceDiv.innerHTML = `
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
      }

      container.appendChild(serviceDiv);
    });
  });

// Dynamic Year in Footer
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Update the HTML