import React, { useState } from 'react';
import './App.css';
import Todotable from './Components/Todolist';

function App() {
const [todo, setTodo] = useState({desc: '', date: ''});
const [todos, setTodos] = useState([]);

const addTodo = (event) => {
  event.preventDefault();
  setTodos([...todos, todo]);

}

const inputChanged = (event) => {
  setTodo({...todo,[event.target.name]: event.target.value});
}

return (
    <div className="App">
      <header className="App-header">
      <h2>Simple Todolist</h2>
      </header>
      <p>Add todo:</p>
      <form onSubmit={addTodo}>
      <p>Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
      Date: <input type="date" name="date" value={todo.date} onChange={inputChanged} />
      <input type="submit" value="Add"/></p>
      </form> 
      <Todotable todos={todos}/>
    </div>
  );
}

export default App;
