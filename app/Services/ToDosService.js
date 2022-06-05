import { ProxyState } from "../AppState.js"
import { ToDos } from "../Models/ToDos.js"
import { sandboxApi } from "./AxiosService.js"






class ToDosService{


  async getToDos(){
    const res =  await sandboxApi.get('nik/todos')
    console.log('getting todos', res.data)
    ProxyState.todos = res.data.map(t => new ToDos(t))
  }


  async createToDo(ToDoData){
    const res = await sandboxApi.post('nik/todos', ToDoData)
    console.log("create todo",res.data)
    ProxyState.todos = [...ProxyState.todos = new ToDos(res.data)]
  }
  async deleteTodo(id){
    const res = await sandboxApi.delete('nik/todos/:todoId')
    console.log('deleting it', res.data)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
  }

}

export const todosService = new ToDosService()