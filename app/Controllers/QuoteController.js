import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"
import { Pop } from "../Utils/Pop.js"



function _drawQuote(){
  let quote = ProxyState.quote
  document.getElementById('quote').innerText = `"${quote.quote}"`
  document.getElementById('author').innerText = quote.name

}

export class QuoteController{
  constructor(){
    console.log('intelisence')
    ProxyState.on('quote',_drawQuote)
    this.getQuote()
    
  }
  async getQuote(){
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
      
    }
  }
}