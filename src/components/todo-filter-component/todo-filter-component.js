import React from "react";
import "./styles/todo-filter-component.scss";

export function TodoFilter({status, setFilterParameter}) {

  const buttons = [
    { id: 1, name: "all", title: "all" },
    { id: 2, name: "done", title: "done" },
    { id: 3, name: "important", title: "important" },
  ]

  let clazz = " todo-filter__item ";
  
  return (
    <section className="todo-filter">
      {
        buttons.map(({id, title, name}) => { 
          const activeStatus = status === name;
          return <button type="button" className={activeStatus ? clazz + " todo-filter__item--status" : clazz} onClick={() => setFilterParameter(name)} key={id}>{title}</button>
        })
      }
    </section>
  );
}