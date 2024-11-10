const apiKey = "93cd8b1e6fdd11ff2139f46d121b3bd7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBar = document.querySelector(".searchbar input");
const searchBtn = document.querySelector(".searchbar button");
const weatherIcon = document.querySelector(".weather-icon");
var weather = document.querySelector(".weather");

async function checkWeather(city) {
  if (city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status != 200) {
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".error").style.display = "block";
    } else {
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temperature").innerHTML = `${Math.round(
        data.main.temp
      )}°C`;
      document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
      document.querySelector(
        ".wind-speed"
      ).innerHTML = `${data.wind.speed} Km/hr`;

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      }
    }
  }
}

searchBtn.addEventListener("click", () => checkWeather(searchBar.value));
