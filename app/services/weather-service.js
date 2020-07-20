import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {

  getWeather() {
    weatherApi.get().then(res => {
      store.commit("weather",new Weather(res.data))
    }).catch(err => console.error(err));
  }
}

const weatherService = new WeatherService();
export default weatherService;
