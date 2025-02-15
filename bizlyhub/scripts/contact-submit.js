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

// Data from contact us page
const currentURL = window.location.href;
const data = currentURL.split('?');

// Grab the second part
let formData = data[1].split('&');

function show(cup) {
    formData.forEach((item) => {
        if (item.startsWith(cup)) {
            result = decodeURIComponent(item.split('=')[1]).replace(/\+/g, ' ');
        }
    });
    return(result);
}

const showInfo = document.querySelector('#results');

showInfo.innerHTML = `
    <div id='showRequiredData'>
        <p>Name: ${show('name')}</p>
        <p>Email: <a href="mailto:${show('email')}">${show('email')}</a></p>
        <p>Message: ${show('message')}</p>
        <p>Date: ${show('timestamp')}</p>
    </div>
`;