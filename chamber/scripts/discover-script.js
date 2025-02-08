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

// name, address, and description 
// Build 8 cards using an h2 for the title, 
// a figure tag for the image, 
// an address tag for the address, 
// a paragraph for the description, and 
// a button titled "learn more"
            
const places = [
    {
      name: "Maramo River",
      address: "Norzagaray Bulacan",
      description: "Discover the Hidden Paradise of Maramo River in Norzagaray, Bulacan!",
      imageSrc: "images/little-palawan.webp",
      imageAlt: "Little Palawan Bulacan City"
    },
    {
      name: "Mt. Balagbag",
      address: "Rodriguez Rizal",
      description: "a beginner-friendly mountain located in Sitio Balagbag, Rodriguez, Rizal. It offers hikers, mountaineers, and mountain bikers a wonderful view of the central business district.",
      imageSrc: "images/mt-balagbag.webp",
      imageAlt: "Mt. Balagbag"
    },
    {
      name: "Mini Eiffel Tower",
      address: "Adventure Resort, San Jose Road, Norzagaray",
      description: "The Eiffel Tower Replica, located within an adventure resort complex, offers a unique and fun experience for visitors of all ages.",
      imageSrc: "images/mini-eiffel-tower.webp",
      imageAlt: "Mini Eiffel Tower"
    },
    {
      name: "Paradise Adventure Resort",
      address: "Lagunita Rd. Brgy. Tungko Mangga, SJDM, Bulacan",
      description: "Escape to Paradise Adventure Camp!  Nestled in the heart of Tungko Mangga SJDM, our camp offers thrilling outdoor adventures for all ages.",
      imageSrc: "images/paradise-adventure-resort.webp",
      imageAlt: "Paradise Adventure Resort"
    },
    {
      name: "Tagalag Fishing Village",
      address: "Baranggay Tagalay Valenzuela",
      description: "Escape to the tranquil Tagalag Fishing Area!  Enjoy a relaxing day by the water, casting your line and reeling in your catch.",
      imageSrc: "images/tagalag-fishing-area.webp",
      imageAlt: "Fishing image in tagalag bulacan"
    },
    {
      name: "Tungtong Falls",
      address: "Paradise 2 SJDM",
      description: "Tungtong Falls is a beautiful waterfall located in San Jose del Monte City, Bulacan, Philippines. It's a popular spot for swimming, picnicking, and enjoying the natural beauty of the area.",
      imageSrc: "images/falls.webp",
      imageAlt: "Image of women in tungtong falls"
    },
    {
      name: "Hearth Lock Park",
      address: "Paradise 2 San Jose Del Monte, Bulacan",
      description: "a popular park known for its beautiful scenery and peaceful atmosphere. The park is a great place to relax and enjoy the outdoors with family and friends.",
      imageSrc: "images/heart-lock.webp",
      imageAlt: "Image of man in lock heart san jose del monte"
    },
    {
      name: "Mendez Private Resort",
      address: "Quirino Hwy, San Jose del Monte City, 3023 Bulacan",
      description: "Mendez Resort and Events Place is a popular spot for those seeking a relaxing getaway near San Jose del Monte City. It offers a variety of amenities to make your stay enjoyable.",
      imageSrc: "images/mendes-private-resort.webp",
      imageAlt: "Image of the pool in mendez private resort"
    }
  ];

  const container = document.getElementById("places-to-visit");

  places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("cards");

    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure><img src="${place.imageSrc}" alt="${place.imageAlt}" width='300' height='200'></figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button class='btn'>Learn More</button>
    `;

    container.appendChild(card);
  });

  // last visit
  function displayVisitMessage() {
    const sidebar = document.getElementById("sidebar");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit, 10);
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDiff === 1 ? "day" : "days";
            sidebar.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
}

displayVisitMessage();