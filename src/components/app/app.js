import React from "react";
import { TodoCollection } from "../todo-collection-component";
import { TodoAddItem } from "../todo-add-item-component";
import { TodoSearch } from "../todo-search-component";
import { TodoFilter } from "../todo-filter-component";
import "./styles/app.scss";
import 'antd/dist/antd.css';


export class App extends React.Component {

  nextId = 1

  state = {
    todos: [
      { id: 1, title: "помыть кошку", done: false, important: false },
      { id: 2, title: "помыть машину", done: false, important: false },
      { id: 3, title: "помыть помидорку", done: false, important: false },
    ],
    keywords: "",
    status: "all"
  }

  _getTodoByid = (id) => {
    return this.state.todos.find(todoObj => todoObj.id === id);
  }

  addNewTodo = (title) => {
    this.setState(({todos}) => {
      while(this._getTodoByid(this.nextId) ) {
        this.nextId++;
      };
      const newItem = {
        id: this.nextId,
        done: false,
        important: false,
        title
      }
      const newArr = [...todos, newItem];
      return ({todos: newArr});
    })
  }

  makeTodoAsDone = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex(todo => todo.id === id);
      const oldItem = todos[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
      return ({todos: newArr})
    })
  }

  deleteTodo = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex(todoObj => todoObj.id === id);
      const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
      return ({todos: newArr})
    })
  }

  makeTodoAsImportant = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex(todoObj => todoObj.id === id);
      const oldItem = todos[idx];
      const newItem = {...oldItem, important: !oldItem.important};
      const newArr = [...todos.slice(0, idx),  newItem, ...todos.slice(idx + 1)];
      return ({todos: newArr})
    })
  }

  setSearchKeyword = (keywords) => {
    this.setState({keywords})
  }

  searchingProcess = (todos, keyword) => {
    if (keyword.length === 0) {
      return todos;
    } else {
      return todos.filter(todo => todo.title.indexOf(keyword) > -1);
    }
  }

  setFilterParameter = (status) => {
    this.setState({status});
  }

  filteringProcess = (todos, status) => {
    switch (status) {
      case "all":
        return todos;
      case "done":
        return todos.filter(todo => todo.done); 
      case "important":
        return todos.filter(todo => todo.important);
      default:
        return todos;
    }
  }

  countDoneTodos = () => {
    return this.state.todos.filter(todo => todo.done).length;
  }

  countImpTodos = () => {
    return this.state.todos.filter(todo => todo.important).length;
  }

  countTodos = () => {
    return this.state.todos.length - this.countDoneTodos();
  }


  render() {
    const { todos, keywords, status } = this.state;
    return (
      <section className="app">
        <h2>Todo List</h2>
        <div className="wrapper-counts">
          <span>{this.countTodos()} - to do</span>
          <span>{this.countDoneTodos()} - done</span>
          <span>{this.countImpTodos()} - important</span>
        </div>
        <TodoSearch  setSearchKeyword={this.setSearchKeyword}/> 
        <TodoFilter status={status} setFilterParameter={this.setFilterParameter}/>
        <TodoCollection todos={this.filteringProcess(this.searchingProcess(todos,keywords), status)} makeTodoAsImportant={this.makeTodoAsImportant} deleteTodo={this.deleteTodo} makeTodoAsDone={this.makeTodoAsDone}/>
        <TodoAddItem addNewTodo={this.addNewTodo}/>
      </section>
    );
  }
}