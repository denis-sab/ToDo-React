
import { useState } from 'react'
import Todo from "./Components/Todo.jsx"
import './App.css'
import AddnewTask from './Components/AddItem'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (

    <section className='container'>

      <AddnewTask/>

      <Todo/>

    </section>
 
  )
}

export default App
