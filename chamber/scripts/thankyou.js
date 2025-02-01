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

window.addEventListener('load', () => {
    const membershipLevels = document.querySelectorAll('#membership-levels div');
    membershipLevels.forEach((membershipLevels, index) => {
        setTimeout(() => {
            membershipLevels.classList.add('show');
        }, index * 600); // Adjust delay between animations here
    });
});

// Data from join page
const currentURL = window.location.href;
const data = currentURL.split('?');

// Grab the second part
let formData = data[1].split('&');

function show(cup) {
    formData.forEach((item) => {
        if (item.startsWith(cup)) {
            result = decodeURIComponent(item.split('=')[1]);// .replace(/%40/g, '@').replace('%2B', '+');
            // Replace '+' with spaces ONLY for 'timestamp'
            if (cup === 'timestamp') {
                result = result.replace(/\+/g, ' ');
            }
        }
    });
    return(result);
}
// first name, last name, email, mobile number, business name, 
// and current date timestamp from the hidden field
const showInfo = document.querySelector('#results');

showInfo.innerHTML = `
    <div id='showRequiredData'>
        <p>Name: ${show('first_name')} ${show('last_name')}</p>
        <p>Email: <a href="mailto:${show('email')}">${show('email')}</a></p>
        <p>Phone: ${show('phone')}</p>
        <p>Business Name: ${show('organization')}</p>
        <p>Date: ${show('timestamp')}</p>
    </div>
`;