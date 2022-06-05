


export class Weather{
  constructor(data){
    this.name = data.name
    this.temp = data.main.temp
    this.fahrenheit = (((data.main.temp - 273.15)*1.8) +32).toFixed()
    this.celsius = (data.main.temp - 273.15).toFixed()
   
 
  }
  
  get WeatherTemplate(){
    return `
    <div class="col-12 p-4" onclick="app.weatherController.seeFahrenheit()">
      
      <p>${this.name}</p>
      <p>${this.temp}</p>
    </div> 
`
  }
  get FahrenheitT(){
    return `
    <div class="col-12 p-4" onclick="app.weatherController.seeCelsius()">
      
      <p>${this.name}</p>
      <p>${this.fahrenheit}°F</p>
    </div> 
    
`
  }
  get Celsius(){
    return `
    <div class="col-12 p-4" onclick="app.weatherController._drawWeather()">
      
      <p>${this.name}</p>
      <p>${this.celsius}°C</p>
    </div> 
`
  }
 
}