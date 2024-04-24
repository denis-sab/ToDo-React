import { useState } from "react";
import Todo from "./components/Todo"
import Todolist from "./components/Todolist"
import AddItem from "./components/AddItem"
import "./App.css";
import './components/Todo.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import Header from "./components/header";


function App() {
  const [newTodo, setNewTodo] = useState({});
  
  const onChange = ({target}) => {
    const {name, value} = target;
    setNewTodo((prev) => prev({...prev, id:Date.now(), [name]: value}))
  }
  
  const [allTodos, setAllTodos] = useState([]);
    const onSubmit = (event) => {
      event.preventDefault();
      if (!newTask.title) return;
      setAllTodos((prev) => [newTodo, ...prev]);
      setNewTodo({});
  };


  const [localStorage, setLocalStorage] = useState();

  
  return (
    <>
      
      <Navbar />
      
      <Header />

      <section className="cont d-flex justify-content-center">
        <div className="col m-5 contclr border border-primary rounded">
            <AddItem onChange={onChange}/>
            
        </div>    
        <div className="col m-5 contclr border border-primary rounded">
            <Todolist />
        </div>
      </section>
    </>
  );
}

export default App;
