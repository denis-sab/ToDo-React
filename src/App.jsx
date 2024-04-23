import { useState } from "react";

import Todo from "./components/Todo";
import Todolist from './components/Todolist'
import AddItem from './components/AddItem'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0);
  const toDoArray = [] ;
  const localStorageArray = [];
  const object = {} ;

  return (
    <>
      <nav>

      </nav>
      <header>
        
      </header>
      <section className=" ">
        <AddItem />
        <Todolist />
        <Todo />
      </section>
    </>
  );
}

export default App;
