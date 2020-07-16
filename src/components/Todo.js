import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
//this class will deal with the todo list as a whole
//functional compoent
class Todo extends Component {




generate=(todo)=> {
    // todo_item_todos
    //map is return a list, and each element in a list must contain a property: key 
    //key cannot have same value
  return <TodoItem key={todo.id} todoItem_todos={todo} 
  //raise the event up again to APP
  completing = {this.props.completing} handleDelete={this.props.handleDelete}/> 
}


 
  render(){
      /* use this.props to acess member variable todos 
    passed from app.js */

    return(
      //<h1>hello</h1>
      <div className='todo_main'>
        {/**use this.generate.bind(this) or use arrow function */}
       {this.props.Todo_todos.map(todo=>this.generate(todo))}
      </div>
      );
  
  }
  
}

export default Todo;
