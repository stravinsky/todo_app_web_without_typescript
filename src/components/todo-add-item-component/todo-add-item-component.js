import React from "react";
import { Form, Button, Input } from "antd";

export class TodoAddItem extends React.Component {

  state = {
    title: null
  }

  _setTitle = (e) => {  
    this.setState({title: e.target.value})
  }

  render() {
    const { addNewTodo } = this.props;
    return (
      <section>
        <h3>Add a new task:</h3>
        <Form onFinish={() => addNewTodo(this.state.title)}>
          <Form.Item>
            <Input  onChange={this._setTitle} value={this.state.title} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">add a new task</Button>
          </Form.Item>
        </Form>
      </section>  
    );
  }
}