import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodos();
  }, [])

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((result) => {
      result.json().then((res) => {
        console.log(res)
        setTodos(res)
      })
    })
  }


  const addTodo = async (name) => {

    await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: name,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return
        }
        else {
          return response.json();
        }
      })
      .then((data) => {
        setTodos((todos) => [...todos, data]);
      })
      .catch((err) => {
        console.log(err)
      });
  }



  return (
    <div className="App">
      <Navbar />
      <AddTodoForm addTodo={addTodo} />
      <div className="listOfTodos">
        {todos.map(todo => {
          return <Todo
            id={todo.id}
            key={todo.id}
            title={todo.title}
            onAdd={addTodo}
          />
        })}
      </div>
    </div>
  );
}

export default App;
