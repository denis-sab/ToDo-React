import { useState } from "react";

import Todo from "./Components/Todo";
import Todolist from './Components/Todolist'
import AddItem from './Components/AddItem'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar";


function App() {
  const [count, setCount] = useState(0);
  const toDoArray = [] ;
  const localStorageArray = [];
  const object = {} ;

  return (
    <>
      
      <Navbar />
      
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
