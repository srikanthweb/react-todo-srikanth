import "@fortawesome/fontawesome-free/css/all.min.css";
<<<<<<< HEAD
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import React, { Component } from "react";
export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wakeup" },
      { id: 2, title: "breakfast" },
      { id: 3, title: "dinner" },
      { id: 4, title: "lunch" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  ClearList = () => {
    console.log("Clear List");
  };
  handleDelete = (id) => {
    console.log("handle edit ${id}");
  };
  handleEdit = (id) => {
    console.log("edit ${id}");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 classNmae="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              ClearList={this.ClearList}
              handleDelete={this.handleDelete}
              handleEdit={(this, this.handleEdit)}
            />
          </div>
        </div>
      </div>
    );
  }
}
=======
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> 782dc1e9dcb8853fece3e3f1796c3d6a28ee2ff8
