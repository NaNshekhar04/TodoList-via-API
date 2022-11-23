import {useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddTodoForm from "./components/AddTodoForm";

function App() {

  useEffect(() => {
    getTodos();
  })

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((result) => {
      result.json().then((res) => {
        console.log(res)
      })
    })
  }

  return (
    <div className="App">
      <Navbar />
      <AddTodoForm />
    </div>
  );
}

export default App;
