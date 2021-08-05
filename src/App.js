import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todosDataSet = [
  {
    id: 1528817077286,
    task: "Organize Garage",
    completed: false,
  },
  {
    id: 1528817084358,
    task: "Bake Cookies",
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todosDataSet: todosDataSet,
    };
  }

  toggleCompleted = (todoId) => {
    // console.log("Toggling", todoId);

    const updateTodosCompleted = this.state.todosDataSet.map(item =>{
      if (todoId === item.id){
        return{
          ...item,
          completed: !item.completed
        }
      }
      else{return item;}
    }) 
    this.setState({
      todosDataSet: updateTodosCompleted
    })
  }

  addTodo = (todoTask) =>{
    const newTodo ={
      id: Date.now(),
      task: todoTask,
      purchased: false,
    }
    this.setState({
      todosDataSet:[
        ...this.state.todosDataSet, 
        newTodo
      ]
    })
  }
  clearCompleted = () => {
    this.setState({
      ...this.state,
      todosDataSet: this.state.todosDataSet.filter(item => 
      !item.completed)})
    
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}></TodoForm>
        <>
          <TodoList clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} todosDataSet={this.state.todosDataSet}></TodoList>
        </>
      </div>
    );
  }
}

export default App;
