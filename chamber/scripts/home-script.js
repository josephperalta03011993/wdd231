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

/* Members directory */
const url = "https://josephperalta03011993.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector("#spotlight-card");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    // this function expects an array that is why we will use data.members instead of just data
    displayMembers(data.members);
}

const displayMembers = (members) => {
    // Limit to only top 3 members
    const topMembers = members.slice(0, 3);

    // build cards
    const cards = document.querySelector("section#spotlights");
    cards.innerHTML = "";

    topMembers.forEach(member => {
        // Create elements to add to the div.cards element
        let logo = document.createElement('img');
        let companyName = document.createElement('h2');
        let tagline = document.createElement('p');
        let email = document.createElement('p');
        let contact = document.createElement('p');
        let website = document.createElement('a');
        let card = document.createElement('section');
        let address = document.createElement('p');

        // Build h2 show member fullname
        companyName.textContent = `${member.name}`;
        tagline.textContent = `${member.tagline}`;
        email.textContent = `${member.email}`;
        contact.textContent = `${member.phone_number}`;
        website.textContent = `${member.url}`;

        // website attribute
        website.setAttribute('href', `${member.website}`)

        // Build img portrait set attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Company logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '75');
        logo.setAttribute('height', '75');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(website);
        
        cards.appendChild(card);
    });
}

getMembersData();