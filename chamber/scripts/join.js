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

    // const bronze = document.querySelector('#bronze');
    // const silver = document.querySelector('#silver');
    // const gold = document.querySelector('#gold');
    
    
    // bronze.classList.add('show');
    // silver.classList.add('show');
    // gold.classList.add('show');
});