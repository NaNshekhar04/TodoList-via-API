import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";

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
        {todos.map(todo => {
          return <Todo
            key={todo.id}
            title={todo.title}
          />
        })}
      </div>
    </div>
  );
}

export default App;
