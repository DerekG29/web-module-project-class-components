import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

let idCount = 0;

function createId() {
  const id = idCount;
  idCount++;
  return id;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: createId(),
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: createId(),
          completed: false
        }
      ],
      formValue: ''
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: this.state.formValue.trim(),
      id: createId(),
      completed: false
    }
    const todos = [...this.state.todos];
    todos.push(newTodo);
    this.setState({ ...this.state, todos: todos, formValue: '' })
  }

  handleInput = (e) => {
    const input = e.target.value;
    this.setState({ ...this.state, formValue: input });
  }

  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ ...this.state, todos: todos });
  }

  toggleCompleted = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    })
    this.setState({ ...this.state, todos: todos });
  }

  render() {
    return (
      <div className='app-wrapper'>
        <Form 
          addTodo={this.addTodo}
          formValue={this.state.formValue}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    )
  }
}

export default App;