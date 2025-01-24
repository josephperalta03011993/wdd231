const temp = document.querySelector('#temp');
const tempMax = document.querySelector('#temp-high');
const tempLow = document.querySelector('#temp-low');
const weather = document.querySelector('#weather');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const weatherIcon = document.querySelector('#img-weather');

const APIKey = "3242e7f2673b3b98a4a563d053ce258a";
const lat = "14.815761836194232";
const lon = "121.07264465914291";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(data) {
    const desc = data.weather[0]['description'].toUpperCase();
    const icon = data.weather[0]['icon'];
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    temp.innerHTML = Math.round(data.main['temp']) + '&deg; C';
    tempMax.innerHTML = 'High: ' + Math.round(data.main['temp_max']) + '&deg;';
    tempLow.innerHTML = 'Low: ' + Math.round(data.main['temp_min']) + '&deg;';
    weather.innerHTML = desc;
    humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';
    sunrise.innerHTML = 'Sunrise: ' + sunriseTime;
    sunset.innerHTML = 'Sunset: ' + sunsetTime;

    // Icon img
    const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.setAttribute('SRC', imgURL);
    weatherIcon.setAttribute('ALT', desc);
    weatherIcon.setAttribute('WIDTH', 150);
    weatherIcon.setAttribute('HEIGHT', 150);
}