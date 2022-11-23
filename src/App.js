import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  })

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((result) => {
      result.json().then((res) => {
        console.log(res)
        setTodos(res)
      })
    })
  }

  return (
    <div className="App">
      <Navbar />
      <AddTodoForm />
      <div className="listOfTodos">
        {todos.map(todo=>{
          return <div>{todo.title}</div>
        })}
      </div>
    </div>
  );
}

export default App;
