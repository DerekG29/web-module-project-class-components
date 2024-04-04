import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { todo, toggleCompleted } = this.props;

    return (
      <div
        className={todo.completed ? 'todo' : 'todo done' }
        onClick={() => toggleCompleted(todo.id)}
      >
        <h2>{todo.name}</h2>
        <span>{todo.completed ? '✅' : '❌'}</span>
      </div>
    )
  }
}
