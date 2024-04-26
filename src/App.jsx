import { useState, useEffect } from "react";
import Todolist from "./components/Todolist";
import AddItem from "./components/AddItem";
import "./App.css";
import './components/Todo.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import Header from "./components/header";

function App() {
  const [newTodo, setNewTodo] = useState({id: '', title: '', date: '', desc: ''});
  const [allTodos, setAllTodos] = useState([]);
  // const [dates, setDates] = useState({date: ''});
  // const [names, setNames] = useState('');

  useEffect(() => {
    setAllTodos(JSON.parse(localStorage.getItem('bigList')));
  }, []);

  const onChange = ({ target }) => {
    setNewTodo({...newTodo, id: Date.now(), [target.name] : target.value
  });
  };

  // const onChange2 = () => {
  //   setDates(dates);
  // };

  // const onChange3 = ({ target }) => {
  //   const { value } = target;
  //   setNames((prev) => ({...prev, value: value}));
  // };

  const onDelete = (TodoIdToRemove) => {
    setAllTodos((prev) => prev.filter((Todo) => Todo.id !== TodoIdToRemove));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.title || '') return;
    const updatedTodos = [{newTodo}];
    setAllTodos(prevTodos => [...prevTodos, updatedTodos])
    setNewTodo('');
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

  console.log(allTodos)

  return (
    <>
      <Navbar />
      <Header />
      <section className="cont d-flex justify-content-center">
        <div className="col m-5 contclr border border-primary rounded contclr2">
          <AddItem 
            onChange={onChange}
            // onChange2={onChange2}
            // onChange3={onChange3}
            onSubmit={onSubmit}
            newTodo={newTodo}
            // dates={dates}
            // names={names}
          />
        </div>
        <div className="col m-5 contclr border border-primary rounded">
          <Todolist 
            onDelete={onDelete} 
            allTodos={allTodos}
            // dates={dates}
            // names={names}
          />
        </div>
      </section>
    </>
  );
}

export default App;