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

const btnNP = document.querySelector('#btnNP');
const btnBronze = document.querySelector('#btnBronze');
const btnSilver = document.querySelector('#btnSilver');
const btnGold = document.querySelector('#btnGold');
const dialogBoxNP = document.querySelector('#dialogBoxNP');
const dialogBoxBronze = document.querySelector('#dialogBoxBronze');
const dialogBoxSilver = document.querySelector('#dialogBoxSilver');
const dialogBoxGold = document.querySelector('#dialogBoxGold');
const closeDialogNP = document.querySelector('#closeDialogNP');

// Non-Profit Dialog Box
btnNP.addEventListener('click', () => {
    dialogBoxNP.showModal();
});

closeDialogNP.addEventListener('click', () => {
    dialogBoxNP.close();
});

// Bronze Dialog Box
btnBronze.addEventListener('click', () => {
    dialogBoxBronze.showModal();
});

closeDialogBronze.addEventListener('click', () => {
    dialogBoxBronze.close();
});

// Silver Dialog Box
btnSilver.addEventListener('click', () => {
    dialogBoxSilver.showModal();
});

closeDialogSilver.addEventListener('click', () => {
    dialogBoxSilver.close();
});

// Gold Dialog Box
btnGold.addEventListener('click', () => {
    dialogBoxGold.showModal();
});

closeDialogGold.addEventListener('click', () => {
    dialogBoxGold.close();
});