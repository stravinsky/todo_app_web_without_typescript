import React from "react";
import { TodoItem } from "../todo-item-component";
import "./styles/todo-item-component.scss";


export function TodoCollection({todos, makeTodoAsDone, deleteTodo, makeTodoAsImportant}) {

  const todosList = todos.map(({id, ...restProps}) => <li className="todo-collection-list__item list-item" key={id}><TodoItem makeTodoAsImportant={() => makeTodoAsImportant(id)} deleteTodo={() => deleteTodo(id)} makeTodoAsDone={() => makeTodoAsDone(id)} {...restProps} /></li>)
  return (
    <ul className="todo-collection-list">
      {
        todosList
      }
    </ul>
  )
}