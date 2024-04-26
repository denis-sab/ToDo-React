import { useState } from "react";

function AddnewTask() {

  //  useState
  const [task, setTask] = useState(["Yago: espresso machen, doppio!", "Anita: Urlaub machen !", "Denis, local storage machen!"]);
  const [newTask, setNewTask] = useState("");

  // handleOnchange
  function handleInput(event) {
    setNewTask(event.target.value);
  }
  // add Item function
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  // delet Item function
  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (

    <div className="container bg-warning-subtle w-50   p-3 ">

      <h4 className="bg-danger-subtle form-control border-success w-50 m-auto mb-2 "> Journal !</h4>

      <label htmlFor=""></label>

      <textarea

        name=""
        id=""
        cols="50"
        rows="5"
        placeholder="Enter task..."
        value={newTask}
        onChange={handleInput} >  
        
        </textarea>

      <br />

      <button
        className="bg-danger-subtle border-warning border-opacity-75 "
        type="submit"
        onClick={addTask} >
          
        Add new task </button>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)} className='btn btn-outline-danger'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" />  </button>
          </li>
        ))}
      </ol>

    </div>
  );
}

export default AddnewTask;
