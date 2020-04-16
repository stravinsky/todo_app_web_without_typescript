import React from "react";
import "./styles/todo-search-component.scss";
import { Input } from "antd";


export function TodoSearch({setSearchKeyword}) {
  return (
    <section className="todo-search">
      <Input onChange={e => setSearchKeyword(e.target.value)} placeholder="search todo" />
    </section>
  );
}