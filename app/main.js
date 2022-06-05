
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { ToDosController } from "./Controllers/ToDosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  weatherController = new WeatherController()
  imageController = new ImageController()
  timeController = new TimeController()
  quoteController = new QuoteController()
  todosController = new ToDosController()
}

window["app"] = new App();
