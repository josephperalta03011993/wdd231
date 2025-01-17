const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

/* Members directory */
const url = "https://josephperalta03011993.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    
    // for testing the data response
    // console.table(data);

    // this function expects an array that is why we will use data.members instead of just data
    displayMembers(data.members);
}

const displayMembers = (members) => {
    // build cards
    const cards = document.querySelector("div#cards");
    cards.innerHTML = "";

    members.forEach(member => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let companyName = document.createElement('h2');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let membershipLevel = document.createElement('p');
        let website = document.createElement('a');

        // Build h2 show member fullname
        companyName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        contact.textContent = `${member.phone_number}`;
        
        if(member.membership_level === 1) {
            membershipLevel.textContent = `Membership Level: Member`;
        } else if (member.membership_level === 2) {
            membershipLevel.textContent = `Membership Level: Silver`;
        } else if (member.membership_level === 3) {
            membershipLevel.textContent = `Membership Level: Gold`;
        }
        
        website.textContent = `${member.website}`;

        // website attribute
        website.setAttribute('href', `${member.website}`)

        // Build img portrait set attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Company logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '177');
        logo.setAttribute('height', '112');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(membershipLevel)
        card.appendChild(website);
        
        cards.appendChild(card);
    });
}

getMembersData();

// Button filters

// button elements
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

grid.addEventListener('click', () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

list.addEventListener('click', () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

/* End of Members directory script */