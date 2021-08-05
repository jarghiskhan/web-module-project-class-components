import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (event) => {
    this.setState({ item: event.target.value });
  };

  submitTodo = (event) => {
    event.preventDefault();
    console.log(this.state.item)
    this.setState({ item: "" });
    this.props.addTodo(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button >Add</button>
      </form>
    );
  }
}
export default TodoForm;
