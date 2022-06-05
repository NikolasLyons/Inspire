

function _drawTime(){
  

  let time = new Date()

  
  console.log(time.toLocaleTimeString([],{hour:'numeric', minute:'2-digit'}))
  document.getElementById('time').innerText = time.toLocaleTimeString([], {hour: 'numeric', minute: "2-digit"})
}




export class TimeController{
  constructor(){
    this.getTime()
    _drawTime()
  }
  
  getTime(){
    
  }
}
setInterval(_drawTime, 10000)