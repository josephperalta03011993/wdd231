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

/* List of Portfolio */
const url = "data/projects.json";
const cards = document.querySelector("#cards");

// Use async and await to fetch JSON data
async function getPortfolioData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        displayPortpolio(data);
    } catch(error) {
        console.error("Error fetching or displaying portfolio data:", error);
    }
}

const displayPortpolio = (projects) => {
    // build cards
    const cards = document.querySelector(".portfolio-list");
    cards.innerHTML = "";

    projects.forEach(project => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let category = document.createElement('p');
        let description = document.createElement('p');
        let technologies = document.createElement('ul')
        let demoLink = document.createElement('a');

        // Build 
        title.textContent = `${project.title}`;
        category.textContent = `${project.category}`;
        description.textContent = `${project.description}`;

        // link
        demoLink.href = `${project.demoLink}`;
        demoLink.textContent = `${project.demoLink}`;
        demoLink.target = "_blank";
        
        // Append the section(card) with the created elements
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(demoLink);
        
        cards.appendChild(card);
    });
}

getPortfolioData();