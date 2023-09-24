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
  time.innerHTML = formatDate(response.data.time);
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let apiKey = "0bb6doe3a544328d20t3a076f6957409";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
