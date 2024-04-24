import { useState } from "react";
import Todo from "./components/Todo"
import Todolist from "./components/Todolist"
import AddItem from "./components/AddItem"
import "./App.css";
import './components/Todo.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";


function App() {
  const [newTodo, setNewTodo] = useState({});

  const [allTodos, setAllTodos] = useState([]);

  const [localStorage, setLocalStorage] = useState();

  
  return (
    <>
      
      <Navbar />
      
      <header>
        
      </header>
      <section className="cont">
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
