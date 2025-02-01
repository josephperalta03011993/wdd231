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

const dialogBox = document.querySelector('#dialogBox');

function closeDialog() {
    const closeDialog = dialogBox.querySelector('#closeDialog');
    const btnX = dialogBox.querySelector('#btnX');

    closeDialog.addEventListener('click', () => {
        dialogBox.close();
    });

    btnX.addEventListener('click', () => {
        dialogBox.close();
    });
}

// Non-Profit Dialog Box
btnNP.addEventListener('click', () => {
    dialogBox.innerHTML = `
        <div id="dialogTitle">
            <h3>Non-Profit Membership Level: Benefits</h3>
            <button id="btnX">X</button>
        </div>
        <p>Join our community and make a difference!</p>
        <ul>
            <li>Basic (FREE)</li>
            <li>Support our mission</li>
            <li>Access to basic member events</li>
            <li>Basic website listing</li>
        </ul><br>
        <button id="closeDialog" aria-label="Close dialog">Close</button>
    `;
    dialogBox.showModal();

    closeDialog();    
});

// Bronze Dialog Box
btnBronze.addEventListener('click', () => {
    dialogBox.innerHTML = `
        <div id="dialogTitle">
            <h3>Bronze Membership Level: Benefits</h3>
            <button id="btnX">X</button>
        </div>
        <p>Join our community and make a difference!</p>
        <ul>
            <li>Bronze (PHP 2,500)</li>
            <li>All Basic benefits</li>
            <li>Access to basic member events</li>
            <li>Basic website listing</li>
            <li>Discounts on events</li>
        </ul><br>
        <button id="closeDialog" aria-label="Close dialog">Close</button>
    `;
    dialogBox.showModal();

    closeDialog();
});

// Silver Dialog Box
btnSilver.addEventListener('click', () => {
    dialogBox.innerHTML = `
        <div id="dialogTitle">
            <h3>Silver Membership Level: Benefits</h3>
            <button id="btnX">X</button>
        </div>
        <p>Join our community and make a difference!</p>
        <ul>
            <li>Silver (PHP 5,000)</li>
            <li>All Basic benefits</li>
            <li>Access to basic member events</li>
            <li>Basic website listing</li>
            <li>Discounts on events</li>
            <li>Access to member directory</li>
            <li>Access to member-only events</li>
        </ul><br>
        <button id="closeDialog" aria-label="Close dialog">Close</button>
    `;
    dialogBox.showModal();

    closeDialog();
});

// Gold Dialog Box
btnGold.addEventListener('click', () => {
    dialogBox.innerHTML = `
        <div id="dialogTitle">
            <h3>Gold Membership Level: Benefits</h3>
            <button id="btnX">X</button>
        </div>
        <p>Join our community and make a difference!</p>
        <ul>
            <li>Gold (PHP 10,000)</li>
            <li>All Basic benefits</li>
            <li>Access to basic member events</li>
            <li>Basic website listing</li>
            <li>Discounts on events</li>
            <li>Access to member directory</li>
            <li>Access to member-only events</li>
            <li>Priority listing on website</li>
            <li>Priority listing in directory</li>
        </ul><br>
        <button id="closeDialog" aria-label="Close dialog">Close</button>
    `;
    dialogBox.showModal();

    closeDialog();
});