import { useState } from "react";
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
    const {value} = target;
    setNewTodo((prevTodo) => ({...prevTodo, id: Date.now(), title: value}))
  }

  const onDelete = ({TodoIdToRemove}) => {
    setAllTasks((prev) => prev.filter((Todo) => Todo.id !== TodoIdToRemove));

  }
  
  const [allTodos, setAllTodos] = useState([]);
    const onSubmit = (event) => {
      event.preventDefault();
      if (!newTodo.title) return;
      setAllTodos((prevAllTodo) => [newTodo, ...prevAllTodo]);
      setNewTodo({});
      
  };

  console.log(allTodos)

  const [localStorage, setLocalStorage] = useState();

  
  return (
    <>
      
      <Navbar />
      
      <Header />

      <section className="cont d-flex justify-content-center">
        <div className="col m-5 contclr border border-primary rounded contclr2">
            <AddItem 
              onChange={onChange}
              onSubmit={onSubmit}
              newTodo={newTodo}
            />
        </div>    
        <div className="col m-5 contclr border border-primary rounded">
            <Todolist />
        </div>
      </section>
    </>
  );
}

export default App;
