const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Footer
const lastModified = document.querySelector('#lastModified');
const currentYear = document.querySelector('#currentyear');

// Footer updates
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// name, address, and description 
// Build 8 cards using an h2 for the title, 
// a figure tag for the image, 
// an address tag for the address, 
// a paragraph for the description, and 
// a button titled "learn more"

// const container = document.getElementById("places-to-visit");

// places.forEach(place => {
//   const card = document.createElement("div");
//   card.classList.add("cards");

//   card.innerHTML = `
//     <h2>${place.name}</h2>
//     <figure><img src="${place.imageSrc}" alt="${place.imageAlt}" width='300' height='200' loading='lazy'></figure>
//     <address>${place.address}</address>
//     <p>${place.description}</p>
//     <button class='btn'>Learn More</button>
//   `;

//   container.appendChild(card);
// });

  // last visit
function displayVisitMessage() {
  const sidebar = document.getElementById("sidebar");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
      sidebar.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const lastVisitDate = parseInt(lastVisit, 10);
      const timeDiff = now - lastVisitDate;
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      if (daysDiff < 1) {
          sidebar.textContent = "Back so soon! Awesome!";
      } else {
          const dayText = daysDiff === 1 ? "day" : "days";
          sidebar.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
      }
  }

  localStorage.setItem("lastVisit", now);
}

displayVisitMessage();

// Function to fetch the JSON data
async function fetchPlaces() {
  try {
      const response = await fetch('https://josephperalta03011993.github.io/wdd231/chamber/data/places.json');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.places;
  } catch (error) {
      console.error('Error loading places:', error);
      return [];
  }
}

// Function to create and render the cards
function renderPlaces(places) {
  const container = document.getElementById("places-to-visit");
  
  places.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("cards");

      card.innerHTML = `
          <h2>${place.name}</h2>
          <figure>
              <img 
                  src="${place.imageSrc}" 
                  alt="${place.imageAlt}" 
                  width='300' 
                  height='200' 
                  loading='lazy'
              >
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button class='btn'>Learn More</button>
      `;

      container.appendChild(card);
  });
}

// Main function to initialize the page
async function initializePage() {
  try {
      // Add loading state
      const container = document.getElementById("places-to-visit");
      container.innerHTML = '<div class="loading">Loading places...</div>';

      // Fetch and render the places
      const places = await fetchPlaces();
      container.innerHTML = ''; // Clear loading message
      renderPlaces(places);
  } catch (error) {
      console.error('Failed to initialize page:', error);
      container.innerHTML = '<div class="error">Failed to load places. Please try again later.</div>';
  }
}

// Call the initialization function when the document is ready
document.addEventListener('DOMContentLoaded', initializePage);