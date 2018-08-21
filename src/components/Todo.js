import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from 'prop-types'


export class Todo extends Component {
  
  render() {
    let todoItems;
    if (this.props.todo) {
      todoItems = this.props.todo.map(todo => {
       
        return (<TodoItem
          
          key={todo.title} todo={todo}   />);
      });
    }

        return (
          <div className="Todo">
          <h2>Todo List</h2>
          
          {todoItems}

          </div>
        );
  }
}

Todo.propTypes = {
todo: PropTypes.array,

}
