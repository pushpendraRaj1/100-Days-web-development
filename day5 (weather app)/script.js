var form = document.querySelector("#sForm");
var finalDiv = document.querySelector("#final");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  var cityName = event.target.cityName.value;
  var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
  var data = await fetch(apiURL);
  var finalData = await data.json();
  var { main, sys, weather } = finalData;

  // Remove old weather card
  finalDiv.innerHTML = "";

  const imageIcon = `https://api.openweathermap.org/img/w/`;
  const weatherIcon = weather[0].icon;
  const temperature = main.temp;
  const feelsLike = main.feels_like;
  const humidity = main.humidity;
  const windSpeed = finalData.wind.speed;

  finalDiv.insertAdjacentHTML("afterbegin", `
    <div class="weather-card">
      <div class="card-header">
        <h2 class="city-name">${cityName}</h2>
        <h4 class="country-name">${sys.country}</h4>
      </div>
      <div class="card-body">
        <div class="weather-icon">
          <img src="${imageIcon}${weatherIcon}.png" alt="Weather Icon">
        </div>
        <div class="weather-info">
          <h3 class="temperature">${temperature}°C</h3>
          <p class="feels-like">Feels like: ${feelsLike}°C</p>
          <p class="humidity">Humidity: ${humidity}%</p>
          <p class="wind-speed">Wind Speed: ${windSpeed} m/s</p>
        </div>
      </div>
    </div>
  `);

  // Clear the input field
  event.target.cityName.value = "";
});