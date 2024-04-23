import { useState } from "react";
import Todo from "./Components/Todo"
import Todolist from "./Components/Todolist"
import AddItem from "./Components/AddItem"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0);
  const toDoArray = [] ;
  const localStorageArray = [];
  const object = {} ;
  return (
    <>
    <section className="container ">

      <div className="row ">
        <AddItem />
      </div>
     
      <div className="row">
        <Todolist />
      </div>
      
      <div className="row">
        <Todo />
      </div>

    </section>
    </>
  );
}

export default App;
