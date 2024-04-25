import { useState, useEffect } from "react";
import Todolist from "./components/Todolist";
import AddItem from "./components/AddItem";
import "./App.css";
import './components/Todo.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import Header from "./components/header";

function App() {
  const [newTodo, setNewTodo] = useState({});
  const [allTodos, setAllTodos] = useState([]);
  const [dates, setDates] = useState({date: ''});
  const [names, setNames] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('bigList') || '[]');
    
    if (Array.isArray(savedTodos) && savedTodos.length > 0) {
      setAllTodos(savedTodos);
    }
  }, []);

  const onChange = ({ target }) => {
    const { value } = target;
    setNewTodo((prevTodo) => ({ ...prevTodo, id: Date.now(), title: value, date: '' }));
  };

  const onChange2 = ({ target }) => {
    const {value} = target;
    setDates({ date: value });
    console.log(dates)
  };

  const onChange3 = ({ target }) => {
    const { value } = target;
    setNames(value);
  };

  const onDelete = (TodoIdToRemove) => {
    setAllTodos((prev) => prev.filter((Todo) => Todo.id !== TodoIdToRemove));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.title) return;
    const updatedTodos = [newTodo, ...allTodos];
    setAllTodos(updatedTodos);
    setNewTodo({});
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('bigList', JSON.stringify(allTodos));
      } catch (error) {
      }
    } else {
    }
  }, [allTodos]);

  return (
    <>
      <Navbar />
      <Header />
      <section className="cont d-flex justify-content-center">
        <div className="col m-5 contclr border border-primary rounded contclr2">
          <AddItem 
            onChange={onChange}
            onChange2={onChange2}
            onChange3={onChange3}
            onSubmit={onSubmit}
            newTodo={newTodo}
            dates={dates}
            names={names}
          />
        </div>
        <div className="col m-5 contclr border border-primary rounded">
          <Todolist 
            onDelete={onDelete} 
            allTodos={allTodos}
          />
        </div>
      </section>
    </>
  );
}

export default App;