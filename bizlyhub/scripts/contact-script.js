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

    // L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { // Stamen Toner tiles
    //     attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under the CC BY 3.0 license. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under the ODbL license.'
    // }).addTo(map);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">HOT</a>',
    //     maxZoom: 19
    // }).addTo(map);

    // L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    //     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    //     maxZoom: 20
    // }).addTo(map);

    L.marker([14.788934, 121.048117]).addTo(map)
        //.bindPopup('BizlyHub')
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

// Hidden timestamp
const now = new Date();
const timestamp = now.toISOString();
const hiddenTimestamp = document.querySelector('#timestamp');
const dateString = timestamp;
const date = new Date();
const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila" // Adjust to your local timezone if needed
});
hiddenTimestamp.value = formattedDate;