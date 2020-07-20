import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  store.State.todos.sort(function (a, b) { return a.timestamp - b.timestamp });
  store.State.todos.forEach(todo => template += todo.Template)
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    store.subscribe("user", TodoService.getTodos)
    this.getTodos();
  }
  getTodos() {
    TodoService.getTodos();
  }
  addTodo(e) {
    e.preventDefault();
    let rawData = e.target.todo.value;
    let todo = {
      description: rawData,
      timestamp: Date.now(),
    };
    TodoService.addTodoAsync(todo);
    e.target.reset();

  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
  changeUser(evt) {
    evt.preventDefault();
    TodoService.changeUsers(evt.target.user.value.toLowerCase())
    document.getElementById("userName").innerText = evt.target.user.value;
    evt.target.reset();
  }
}
