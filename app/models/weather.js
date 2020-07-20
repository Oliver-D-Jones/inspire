export default class Weather {
  constructor(data) {
    this.city = data.name || data.city;
    this.temp = ((data.main.temp -273.15)* 9/5 + 32).toFixed(0) || data.temp;
    this.feels_like = data.main.feels_like || data.feels_like;
    this.humidity = data.main.humidity || data.humidity;
    this.visibility = data.main.visibility || data.visibility;
    this.weather_data = data.weather || data.weather_data;

  }
  get Template(){
    
    let template = `
    <p class="bg-primary border rounded" style="opacity:.8">Currently&nbsp;<span id="tempature">${this.temp}&#x2109;</span> in ${this.city}&nbsp;<img id="weatherIcon" class="img-fluid" src="http://openweathermap.org/img/w/" /></p>
    `
    return template;
  }
}