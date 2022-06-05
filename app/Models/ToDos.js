



export class ToDos{
  constructor(data){
    this.id = data.id
    this.complete = data.complete
    this.user = data.user
    this.description = data.description
  }

  get Template(){
    return`
    <li>
    <input type="checkbox" name="todo" id="todo">
    <label for="todo">${this.description}</label>
    <i class="mdi mdi-delete-circle" onclick="app.todosController.deleteTodo('${this.id}')"></i>
    </li>`
  }
}