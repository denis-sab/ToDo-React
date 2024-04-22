import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  return <> 
          <Todo/>
          <Todo/>
          <Todo/>
  </>
}

export default App
