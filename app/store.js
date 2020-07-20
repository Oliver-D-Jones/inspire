import Weather from "./models/weather.js"
import ToDo from "./models/todo.js"
import Quote from "./models/quote.js";

let _state = {
  /**@type {Weather} */
  weather: new Weather({ name: "loading", main: { temp: 0.0 } }), //temporary fake data
  /**@type {ToDo[]}*/
  todos: [],
  /**@type string */
  backgroundURL: "",
  /**@type{Quote} */
  quote: new Quote({ quote: "Wat", author: "Illogic" }),
  /**@type string */
  user: "oliver",
};

// function _loadState() {
//   let data = JSON.parse(localStorage.getItem("Inspire"));
//   if (data) {
//     data.todos = data.todos.map(todo => new ToDo(todo));
//     _state.user= data.user
//     _state.todos = data;
//   }
// }
// _loadState();



/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  weather: [],
  todos: [],
  backgroundURL: [],
  quote: [],
  user: [],
};

/**
 * Validates the property string is defined in both the state and the listeners
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state.hasOwnProperty(prop) || !Array.isArray(_listeners[prop])) {
    throw new Error(
      `Unable to subscribe to ${prop}, please check your state and your listeners`
    );
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) {
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  /**
   * Takes in a property to observe, and a function to run when it changes
   * @param {string} prop
   * @param {function} fn
   */
  subscribe(prop, fn) {
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
    _listeners[prop].forEach(fn => fn());
  }
  // saveTodos() {
  //   let currentUser = _state.user;
  //   for(let index = 0;index<localStorage.Inspire.length)
  //   let save =[{todos:_state.todos,user:_state.user}]

  //   localStorage.setItem("Inspire", JSON.stringify(save))
  // }
}

const store = new Store();
export default store;
