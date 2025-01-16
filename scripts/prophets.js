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
    const cards = document.querySelector("div#cards");
    cards.innerHTML = "";

    prophets.forEach(prophet => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let numofchildren = document.createElement('p');
        let yearsProphet = document.createElement('p');
        let death = document.createElement('p');

        // Build h2 show prophet fullname
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        numofchildren.textContent = `Number of Children: ${prophet.numofchildren}`;
        yearsProphet.textContent = `Prophet Years: ${prophet.length}`;
        death.textContent = `Death: ${prophet.death}`;

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
        card.appendChild(numofchildren);
        card.appendChild(yearsProphet);
        card.appendChild(death);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();

// Button filters

// button elements
const all = document.querySelector("#all");
const idaho = document.querySelector("#idaho");
const nonus = document.querySelector("#nonus");
const fifteenPlus = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");

async function jsonFetch(url) {
    console.log("JSON Fetch Function");
    const response = await fetch(url);
    const data = await response.json();
    return data.prophets;
}

const getProphets = async (filter = "all") => 
    {
        let prophets = await jsonFetch(url);

        switch(filter) {
            case "idaho":
                prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
                break;
            case "nonus":
                prophets = prophets.filter((prophet) => prophet.birthplace === "England");
                break;
            case "fifteenPlus":
                prophets = prophets.filter((prophet) => prophet.length >= 15);
                break;
            case "childs":
                prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
                break;
            case "childl":
                prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
                break;
        }

        displayProphets(prophets);
    }

// button event listeners
function clearButtonClaases() {
    filteredButtons = document.querySelectorAll("button");
    filteredButtons.forEach(button => button.className = "");
}

all.addEventListener('click', () => {
    clearButtonClaases();
    getProphets("all");
    all.classList.add("active");
});

idaho.addEventListener('click', () => {
    clearButtonClaases();
    getProphets("idaho");
    idaho.classList.add("active")
});

nonus.addEventListener('click', () => {
    clearButtonClaases();
    getProphets("nonus");
    nonus.classList.add("active");
});

fifteenPlus.addEventListener('click', () => {
    clearButtonClaases();
    getProphets("fifteenPlus");
    fifteenPlus.classList.add("active");
});

childs.addEventListener('click', () => {
    clearButtonClaases();
    getProphets("childs");
    childs.classList.add("active");
});

childl.addEventListener('click', () => {
    clearButtonClaases();
    getProphets("childl");
    childl.classList.add("active");
});