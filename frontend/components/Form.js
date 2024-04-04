import React from 'react'

export default class Form extends React.Component {
  render() {
    const { addTodo, formValue, handleInput, clearCompleted } = this.props;
    return (
      <div className='form-wrapper'>
        <form onSubmit={addTodo} >
          <input id='input' type='text' placeholder='Type Todo' required value={formValue} onChange={handleInput}/>
          <input id='submit' type='submit' value='Add Todo'></input>
        </form>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}
