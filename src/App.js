import TodoList from './TodoList';
import {useState} from 'react';

function App() {
const [todos,setTodos]=useState([]);
const [text,setText]=useState("");

function handleAddTodo(e){
  e.preventDefault();

  if(text.trim()==="")return;

  const newTodo={
    id:Date.now(),
    text:text,
    completed:false
  };
  setTodos([...todos,newTodo]);
  setText("");
}

function handleDelete(id){
  setTodos(todos.filter((todo)=>todo.id !==id));
}

function handleToggle(id){
  setTodos(
    todos.map((todo)=>
    todo.id===id?{...todo,completed:!todo.completed}:todo)
  )
}

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={handleAddTodo}>
      <input 
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Add a new task..."
      />
        <button type="submit">Add</button>
      </form>

      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle}/>
    </div>
  );
}

export default App;
