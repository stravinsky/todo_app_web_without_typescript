import React from "react";

import { Button } from 'antd';
import { DeleteOutlined, CheckOutlined, ExclamationOutlined } from "@ant-design/icons"

export function TodoItem({title, done, important, makeTodoAsDone, makeTodoAsImportant, deleteTodo}) {

  let clazz = " list-item__title ";
  if (done) {
    clazz += " list-item__title--done "
  }

  if(important) {
    clazz += " list-item__title--imp "
  }
  return (
    <React.Fragment>
      { done ? <div className="list-item__checked-icon"><CheckOutlined /></div> : null }
      { important ? <div className="list-item__important-icon"><ExclamationOutlined /></div> : null }
      <span onClick={makeTodoAsDone} className={clazz}>{title}</span>
      <div className="list-item__imp-btn"><Button onClick={makeTodoAsImportant} type={"primary"}><ExclamationOutlined /></Button></div>
      <Button onClick={deleteTodo} type="dashed" danger><DeleteOutlined /></Button>
      
    </React.Fragment>
  );
}

