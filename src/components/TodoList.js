// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";
import Todo from "./Todo.js";

const TodoList = (props) => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  return (
    <>
      <h2>TodoList</h2>
      <div className="todo-list">
        {props.todosDataSet.map((todo) => (
          <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
        ))}
        
      </div>
      <button onClick={props.clearCompleted} className="clear-btn">
            Clear Completed
        </button>
    </>
  );
};

export default TodoList;
