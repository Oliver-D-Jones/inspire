export default class ToDo {
  constructor(data) {
    this._id = data._id || data.id;
    this.description = data.description;
    this.user = data.user;
    this.completed = data.completed;
    this.timestamp = data.timestamp || Date.now();
  }

  get Template() {
    let template = `<div class="col-12 border rounded bg-primary"><p class="text-break pt-1">
    <button class="btn btn-md bg-warning" onclick="app.todoController.removeTodo('${this._id}')"><b>&#x274C;</b></button>
    <button class="btn btn-md bg-success mr-2" onclick="app.todoController.toggleTodoStatus('${this._id}')"><b>&#x270D; </b></button>`;
    if (!this.completed) {

      template += `${this.description}`;
    }
    else {
      template += `<s>${this.description}</s>`;
    }
    template += `
    </p>
    </div>`
    return template;
  }
}