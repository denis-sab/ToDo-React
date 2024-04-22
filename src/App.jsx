
import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import AddnewTask from './Components/AddItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='container'>

      <div className='row'>
        <AddnewTask/>
      </div>
      <div className='row'>
      <Todo/>
      </div>


    </section>
    </>
  )
}

export default App
