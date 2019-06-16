import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
class Todos extends React.Component{
  render ()
  {
  
  return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
      delTodo={this.props.delTodo} addTodo={this.addTodo}/>//Passing each todo as a prop to 'TodoItems'
    )
  );//'markComplete' is also a prop came from TodoItem
}
}
//prop todos is array of objects thats why prop type is array
Todos.propTypes={
  todos:PropTypes.array.isRequired
}

export default Todos;
