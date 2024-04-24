import { useState } from "react";
import Todo from "./components/Todo"
import Todolist from "./components/Todolist"
import AddItem from "./components/AddItem"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";


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
      <section className="">
        <div className="">
            <AddItem /><Todo />
            
        </div>    
        <div className="">
            <Todolist />
        </div>
      </section>
    </>
  );
}

export default App;
