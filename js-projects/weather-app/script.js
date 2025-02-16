const API_KEY = '0709abd7f244f4c863b01f660fc8fa71';
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

const q = document.getElementById('input-city');
const button = document.querySelector('button');
const h1 = document.getElementById('city');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');
const errorMessage = document.getElementById('error-message');

const getWeather = async city => {
  try {
    const response = await fetch(URL + city);
    const data = await response.json();

    displayWeather(data);
  } catch (e) {
    alert('Something Went Wrong');
  }
};

const displayWeather = weatherData => {
  if (weatherData.cod === 200) {
    errorMessage.innerText = '';
    h1.innerText = weatherData.name;
    temp.innerText = Math.round(weatherData.main.temp) + '°C';
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherIcon.alt = weatherData.name;
    description.innerText = weatherData.weather[0].description;
  } else {
    h1.innerText = '';
    temp.innerText = '';
    weatherIcon.src = '';
    weatherIcon.alt = '';
    description.innerText = '';
    errorMessage.innerText = 'City Not Found';
  }
};

button.addEventListener('click', () => {
  getWeather(q.value);
});
