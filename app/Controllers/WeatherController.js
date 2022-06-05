
import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"


function _drawWeather(){
  let weather = ProxyState.weather
  document.getElementById('weather').innerHTML = weather.WeatherTemplate 
}




export class WeatherController{
  constructor(){

    console.log('this is the information controller')
    ProxyState.on('weather',_drawWeather)
    this.getWeather()
    _drawWeather()
    this.seeFahrenheit()
   
  }


  async getWeather(){
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
    }
  }


  
  seeFahrenheit(){
    document.getElementById('weather').innerHTML = ProxyState.weather.FahrenheitT
  }
  seeCelsius(){
    document.getElementById('weather').innerHTML = ProxyState.weather.Celsius
  }

}