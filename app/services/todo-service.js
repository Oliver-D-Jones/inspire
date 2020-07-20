import store from "../store.js";
import ToDo from "../models/todo.js"
// @ts-ignore
const todoApi = axios.create({
  baseURL: `https://bcw-sandbox.herokuapp.com/api/`,
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get(store.State.user+ "/todos").then(res => {
      let toDos = res.data.data.map(todo => new ToDo(todo))
      toDos.sort(function (a, b) { return a.timestamp - b.timestamp })
      store.commit("todos", toDos);

    }).catch(err => console.error(err));
  }
  changeUsers(user) {
    store.commit("user",user);
  }

  addTodoAsync(todo) {
    todoApi.post(store.State.user+ "/todos", todo).then(res => {
      
      this.getTodos();
    }).catch(err => console.error(err));
  }

  toggleTodoStatusAsync(todoId) {

    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo.completed) {
      todo.completed = false;
    }
    else {
      todo.completed = true;
    }
    todoApi.put(store.State.user+ "/todos/"+ todoId, todo).then(res => {
      this.getTodos();
    }).catch(err => console.error(err))
  }

  removeTodoAsync(todoId) {
    todoApi.delete(store.State.user + "/todos/" + todoId).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))

  }
}

const todoService = new TodoService();
export default todoService;
