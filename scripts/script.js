// get and set the current year in the footer
const currentyear = document.querySelector('#currentyear');
const year = new Date().getFullYear();
currentyear.textContent = year;

// get and set the last modified date in the footer
lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;