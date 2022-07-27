// import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggle}) => {
return (
  todos.map((todo) => <Todo task={todo} key={todo.id} toggle={toggle}/>)
) 
}

export default TodoList