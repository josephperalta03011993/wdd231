const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    
    // for testing the data response
    // console.table(data);

    // this function expects an array that is why we will use data.prophets instead of just data
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // build cards
    prophets.forEach(prophet => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');

        // Build h2 show prophet fullname
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;


        // Build img portrait set attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '160');
        portrait.setAttribute('height', 'auto');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();