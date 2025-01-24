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

    // filter the array for Gold and Silver
    const filteredMembers = data.members.filter(member => member.membership_level === 2 || member.membership_level === 3);
    if (filteredMembers.length > 0) {
        // Lets get random item from the list
        const shuffleMembers = filteredMembers.sort(() => Math.random() - 0.5);    

        // Limit to only top 3 members
        const topMembers = shuffleMembers.slice(0, 3);

        // this function expects an array that is why we will use data.members instead of just data
        displayMembers(topMembers);
    }
}

const displayMembers = (topMembers) => {
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
        let hr = document.createElement('hr');
        let infoDiv = document.createElement('div');
        let textDiv = document.createElement('div');

        // Build h2 show member fullname
        companyName.textContent = `${member.name}`;
        tagline.textContent = `${member.tagline}`;
        email.textContent = `EMAIL: ${member.email}`;
        contact.textContent = `PHONE: ${member.phone_number}`;
        website.textContent = `URL: ${member.url}`;

        // website attribute
        website.setAttribute('href', `${member.website}`)
        hr.setAttribute('class', 'breakline');
        infoDiv.setAttribute('class', 'infoDiv');
        textDiv.setAttribute('class', 'textDiv');
        // Build img portrait set attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Company logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '75');
        logo.setAttribute('height', '75');

        // Append the info to the div
        textDiv.appendChild(email);
        textDiv.appendChild(contact);
        textDiv.appendChild(website);
        infoDiv.appendChild(logo);
        infoDiv.appendChild(textDiv);

        // Append the section(card) with the created elements
        card.appendChild(companyName);
        card.appendChild(tagline);
        card.appendChild(hr);
        card.appendChild(infoDiv);
        
        cards.appendChild(card);
    });
}

getMembersData();