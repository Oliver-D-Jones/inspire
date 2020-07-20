import WeatherService from "../services/weather-service.js";
import store from "../store.js";

function drawWeather() {
  let insert = store.State.weather.Template;
  document.getElementById("weather").innerHTML = insert;
  // @ts-ignore
  document.getElementById("weatherIcon").src += store.State.weather.weather_data[0].icon + ".png";
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
    let minute = 1000* 60;
    setInterval(WeatherService.getWeather, minute);
  }
  convert(evt) {
    if (evt.target.textContent == "Celcius") {
      evt.target.textContent = "Farenheit";
      store.State.weather.temp = (Number(store.State.weather.temp) - 32) * 5 / 9;
      document.getElementById("tempature").innerHTML = String(store.State.weather.temp.toFixed(1)) + "&#x2103;";
    }
    else {
      evt.target.textContent = "Celcius";
      store.State.weather.temp = Number(store.State.weather.temp) * 9 / 5 + 32;
      document.getElementById("tempature").innerHTML = String(store.State.weather.temp.toFixed(1)) + "&#x2109;"
    }
  }
}
