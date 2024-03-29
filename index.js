function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  searchCity(searchInput.value);
}
function searchCity(city) {
  let apiKey = "e1edd55abaa94f0b5f9908318a239d4f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function showTemperature(response) {
  let roundWind = Math.round(response.data.wind.speed);
  let showtemperature = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = showtemperature;

  let showCityName = document.querySelector("#city");
  showCityName.innerHTML = response.data.name;
  let showIcon = document.querySelector("#icon");
  showIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  showIcon.setAttribute("alt", response.data.weather[0].description);

  let showDescription = document.querySelector("#Description");
  showDescription.innerHTML = response.data.weather[0].description;

  let showHumidity = document.querySelector("#Humidity");
  showHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  celsTemp = Math.round(response.data.main.temp);

  let showWind = document.querySelector("#Wind");
  showWind.innerHTML = `Wind: ${roundWind} Km/H`;

  let showClouds = document.querySelector("#Clouds");
  showClouds.innerHTML = `Clouds: ${response.data.clouds.all}%`;
}
let buttonSearch = document.querySelector("#search");
buttonSearch.addEventListener("click", search);

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "e1edd55abaa94f0b5f9908318a239d4f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let buttonCurrent = document.querySelector("#current");
buttonCurrent.addEventListener("click", getCurrent);

let now = new Date();
let dates = now.getDay();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = week[dates];
let hours = now.getHours();
let minutes = now.getMinutes();
let data = document.querySelector("#dateTime");
if (minutes < 10) {
  data.innerHTML = `${dayOfWeek} ${hours}:0${minutes}`;
} else {
  data.innerHTML = `${dayOfWeek} ${hours}:${minutes}`;
}
let celsTemp = null;
function displayfarhrenheiTemp(event) {
  event.preventDefault();
  let fahrTemp = (celsTemp * 9) / 5 + 32;
  let tempselector = document.querySelector(".temperature");
  tempselector.innerHTML = Math.round(fahrTemp);
}
function displaycelsiumTemp(event) {
  event.preventDefault();
  let tempselector = document.querySelector(".temperature");
  tempselector.innerHTML = celsTemp;
}
//displayForecast();

let fahrlink = document.querySelector("#fahr");
fahrlink.addEventListener("click", displayfarhrenheiTemp);
let celslink = document.querySelector("#cels");
celslink.addEventListener("click", displaycelsiumTemp);
/**function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = `<div class="row">
        <div class="col-2">
          <div class="weather-forecast-date">
Monday
          </div>
          <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Cloudy icon"
                  class="weather-icon float-left"
                  id = "icon1";
                />
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-min">16C</span>
            <span class="weather-forecast-temperature-min">20C</span>
          </div>
        </div>
        <div class="col-2">
            <div class="weather-forecast-date">
              Tuesday
          </div>
            <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Cloudy icon"
                  class="weather-icon float-left"
                  id = "icon2";
                />
            <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-min">16C</span>
            <span class="weather-forecast-temperature-min">20C</span>
          </div>
                
          </div>
          <div class="col-2">
            <div class="weather-forecast-date" id="forecast">
              Wednesday
          </div>
              <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Cloudy icon"
                  class="weather-icon float-left"
                  id = "icon3";
                />
              <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-min">16C</span>
            <span class="weather-forecast-temperature-min">20C</span>
          </div>
            </div>
            <div class="col-2">
              <div class="weather-forecast-date">
              Thursday
          </div>
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Cloudy icon"
                  class="weather-icon float-left"
                  id = "icon4";
                />
                <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-min">16C</span>
            <span class="weather-forecast-temperature-min">20C</span>
          </div>
              </div>
              <div class="col-2">
              <div class="weather-forecast-date">
              Friday
          </div>
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Cloudy icon"
                  class="weather-icon float-left"
                  id = "icon5";
                />
                <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-min">16C</span>
            <span class="weather-forecast-temperature-min">20C</span>
          </div>
              </div>
              <div class="col-2">
              <div class="weather-forecast-date">
              Saturday
          </div>
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Cloudy icon"
                  class="weather-icon float-left"
                  id = "icon6";
                />
                <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-min">16C</span>
            <span class="weather-forecast-temperature-min">20C</span>
          </div>
              </div>
            </div>`;
          } 
            */
