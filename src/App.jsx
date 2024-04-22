import { useState } from 'react'

import './App.css'
import Todolist from './components/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Todolist/>
    </>
  )
}

export default App
