import { useState } from "react";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Todolist />
      <Todo />
    </>
  );
}

export default App;
