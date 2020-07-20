import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js"
import WelcomeController from "./controllers/welcome-controller.js"
import QuoteCOntroller from "./controllers/quote-controller.js"

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.imageController = new ImageController();
    this.welcomeController =new WelcomeController();
    this.quoteController = new QuoteCOntroller();
  }
}

window["app"] = new App();
