import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/ToDosService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodos(){
  let todo = ProxyState.todos
  let template = ''
  let finished = 0
  console.log('shit happeneds', todo)
  todo.forEach(t =>{ 
    template += t.Template
    if(t.completed){
      finished ++
      }
    })
  document.getElementById('todos').innerHTML = template
  document.getElementById('finished').innerText = finished


}



export class ToDosController{
  constructor(){
    console.log('live with the todos')
    ProxyState.on('todos', _drawTodos)
    this.getToDos()
   
 
    
   
  }
  async getToDos(){
    try {
      await todosService.getToDos()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
      
    }
  }
  async createToDo(){
    try {
      window.event.preventDefault()
      console.log('creating todo')
      let form = window.event.target
      let ToDoData = {
        description:  form.description.value
      }
      await todosService.createToDo(ToDoData)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message,'error')
      console.log('error')
      
      
    }
  }

  async completeTodo(id){
    try {
     
     await todosService.completeTodo(id)

    } catch (error) {
      Pop.toast(error.message,'error')
      console.log('error')
      
    }
  }

  async deleteTodo(id){
    try {
      if(await Pop.confirm('are you sure you want to delete task')){

        todosService.deleteTodo(id)
      }
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
      
    }
  }

}