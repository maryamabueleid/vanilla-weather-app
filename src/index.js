function displayTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("h1");
  cityName.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;

  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let time = document.querySelector("#date");
  time.innerHTML = formatDate(response.data.time * 1000);
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  icon.setAttribute("alt", response.data.condition.description);
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let Day = days[date.getDay()];
  return `${Day} ${hours}:${minutes}`;
}
function search(city) {
  let apiKey = "0bb6doe3a544328d20t3a076f6957409";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(Event) {
  Event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
