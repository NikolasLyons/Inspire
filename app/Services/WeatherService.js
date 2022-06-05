import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/weather.js"
import { sandboxApi } from "./AxiosService.js"





class WeatherService{
  async getWeather(){
    const res =  await sandboxApi.get('weather')
    console.log(res.data)
    ProxyState.weather = new Weather(res.data)

  }
  // async getFahrenheit(){
  //   const res = await sandboxApi.get('weather')
  //   console.log(res.data)
  // }
}

export const weatherService = new WeatherService()