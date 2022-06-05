import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/ToDosService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodos(){
  let todo = ProxyState.todos
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
}



export class ToDosController{
  constructor(){
    console.log('live with the todos')
    ProxyState.on('todos', _drawTodos)
    this.getToDos()
    
    _drawTodos()
    this.deleteTodo()
   
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
      debugger
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
      
    }
  }

  async deleteTodo(id){
    try {
      await todosService.deleteTodo(id)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
      
    }
  }

}