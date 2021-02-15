// date
let now = new Date();

let time = document.querySelector(".time")

let hours = now.getHours()
let minutes = now.getMinutes()

let date = now.getDate()
let years = now.getFullYear()

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()]

let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[now.getMonth()]

time.innerHTML = `${day}, ${month} ${date}, ${years} ${hours}:${minutes}`

//search
function searchWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
    console.log(searchInput.value);

  let country = document.querySelector("#country");
  country.innerHTML = searchInput.value;

  let city = searchInput.value
  let apiKey = "a0c13833abc217a0181faa947d5ff7c5"
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?"

  function showTemp(response) {
    console.log(response.data.main.temp)
    let change = document.querySelector("#temperature")
    change.innerHTML = response.data.main.temp
  }

    axios.get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`).then(showTemp)

}
let form = document.querySelector(".form-example");

form.addEventListener("search", searchWeather);

//temperature
function convertToFarenheit(event,) {
  event.preventDefault()
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 1.8) + 32)
}

function convertToCelsius(event) {
  event.preventDefault()
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature - 32) * 0.5556)
}
let farenheitLink = document.querySelector(".faren")
farenheitLink.addEventListener("click", convertToFarenheit)


let celsiusLink = document.querySelector(".celsi")
celsiusLink.addEventListener("click", convertToCelsius)

