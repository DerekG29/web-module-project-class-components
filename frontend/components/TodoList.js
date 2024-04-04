import React from 'react'
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted } = this.props;
    return (
      <div className='todoList'>
        {todos.length
          ? todos.map(todo => <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />)
          : <div className='todo'>Nothing Left To Do!</div>
        }
      </div>
    )
  }
}
export default TodoList;