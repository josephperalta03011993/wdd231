const temp = document.querySelector('#temp');
const tempMax = document.querySelector('#temp-high');
const tempLow = document.querySelector('#temp-low');
const weather = document.querySelector('#weather');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const weatherIcon = document.querySelector('#img-weather');
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const dayThree = document.querySelector('#day-three');
const weatherEvents = document.querySelector('#weather-event-container');

const APIKey = "3242e7f2673b3b98a4a563d053ce258a";
const lat = "14.815761836194232";
const lon = "121.07264465914291";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
const apiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

async function apiForecastFetch() {
  try {
    const response = await fetch(apiURLForecast);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecastResults(data);
      displayWeatherEvent(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
apiForecastFetch();

function displayWeatherEvent(data) {
    let eventHTML = "";
    const getDateDay = (dateString) => {
      const date = new Date(dateString);
      const time = date.toLocaleTimeString('en-PH', {hour:'2-digit', minute:'2-digit'});
      return date.toLocaleDateString('en-PH', { weekday: 'long' }) + ', ' + time;
    }

    data.list.forEach(element => {
      const weatherEventDesc = element.weather[0].description.toUpperCase();
      const dateEvent = element.dt_txt;
      const dayEventValue = getDateDay(dateEvent);
      eventHTML += `<div><p class="event-content"><strong>${dayEventValue}</strong></p><hr><p>${weatherEventDesc}</p></div>`;
    });

    weatherEvents.innerHTML = eventHTML;
}

function displayResults(data) {
    const desc = data.weather[0]['description'].toUpperCase();
    const icon = data.weather[0]['icon'];
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

    temp.innerHTML = Math.round(data.main['temp']) + '&deg; C';
    tempMax.innerHTML = 'High: ' + Math.round(data.main['temp_max']) + '&deg;';
    tempLow.innerHTML = 'Low: ' + Math.round(data.main['temp_min']) + '&deg;';
    weather.innerHTML = desc;
    humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';
    sunrise.innerHTML = 'Sunrise: ' + sunriseTime;
    sunset.innerHTML = 'Sunset: ' + sunsetTime;

    // Icon img
    const imgURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    weatherIcon.setAttribute('SRC', imgURL);
    weatherIcon.setAttribute('ALT', desc);
    weatherIcon.setAttribute('WIDTH', 150);
    weatherIcon.setAttribute('HEIGHT', 150);
    weatherIcon.setAttribute('OBJECT-FIT', 'contain');
}

function displayForecastResults(data) {
  try {
    const temp = Math.round(data['list'][0].main.temp);
    const tempTomorrow = Math.round(data['list'][6].main.temp);
    const tempNextDay = Math.round(data['list'][14].main.temp);

    const getDateDay = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-PH', { weekday: 'long' });
    }

    const tempDate = data['list'][0].dt_txt;
    const tempTomorrowDate = data['list'][6].dt_txt;
    const thirdDaytDate = data['list'][14].dt_txt;

    const todayText = getDateDay(tempDate);  
    const tomorrowText = getDateDay(tempTomorrowDate);
    const thirdDayDate = getDateDay(thirdDaytDate);

    today.innerHTML = `${todayText}: ${temp}&deg; C`;
    tomorrow.innerHTML = `${tomorrowText}: ${tempTomorrow}&deg; C`;
    dayThree.innerHTML = `${thirdDayDate}: ${tempNextDay}&deg; C`;
  } catch (error) {
    console.log(error);
  }
}