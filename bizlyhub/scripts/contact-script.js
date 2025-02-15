const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Dynamic Year in Footer
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Update the HTML

// Function to initialize the map (this will run *after* Leaflet loads)
function initMap() {
    const map = L.map('map').setView([14.788934, 121.048117], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([14.788934, 121.048117]).addTo(map)
        .bindPopup('BizlyHub')
        .openPopup();
}

// Check if Leaflet is already loaded (in case it was loaded by another script)
if (typeof L === 'undefined') {
    // Leaflet is NOT loaded, so load it dynamically
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; // Or your preferred version

    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; // Or your preferred version
    leafletJS.onload = initMap; // Call initMap AFTER Leaflet is loaded

    document.head.appendChild(leafletCSS);
    document.head.appendChild(leafletJS);
} else {
    // Leaflet IS already loaded, so just initialize the map
    initMap();
}