import { useState } from "react";
import Todo from "./components/Todo"
import Todolist from "./components/Todolist"
import AddItem from "./components/AddItem"
import "./App.css";
import './components/Todo.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';


function App() {
  const [newTodo, setNewTodo] = useState({});

  const [allTodos, setAllTodos] = useState([]);

  const [localStorage, setLocalStorage] = useState();

  
  return (
    <>
      
      <Navbar />
      
      <header>
        
      </header>
      <section className="cont d-flex justify-content-center">
        <div className="col m-5 contclr">
            <AddItem />
            
        </div>    
        <div className="col m-5 contclr">
            <Todolist />
        </div>
      </section>
    </>
  );
}

export default App;
