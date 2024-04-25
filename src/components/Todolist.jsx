import React from 'react';

function Todolist({allTodos, onDelete}) {
  return (
    <div>
      {/* <div classname='vh-100'> */}
       
        {/* <div classname='container'>
          <div classname='row '>
            <div classname='col '> */}
             
        
                  <h4 className='navbarcolor fontstyle2'>To Do List</h4>
                  {/* <table classname='table table-bordered '> */}
                    
                  {allTodos.map(({Todo, title}) => (
                  <div key={Todo.id} className='mx-4 my-2 row p-2 todostyle'>
                    <li className='col-8 mt-2 list-group-item card fontstyle d-flex align-middle'>{title}</li>
                    <div className='col mx-3 d-flex justify-content-end'>
                      <button className='mx-2 btn btn-outline-warning'><img className='iconssize' src="src\assets\edit.svg" alt="editbtn" /></button>
                      <button onClick={() => onDelete(Todo.id)} className='btn btn-outline-danger'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" /></button>
                    </div>
                  </div>
        ))}
             



                      {/* <tr classname='tr1'>
                        <th classname='th1' >
                          No.
                        </th>
                        <th classname='th2' >
                          TodoItem
                        </th>
                        <th classname='th3' >
                          Actions
                        </th>
                      </tr> */}
                 
                  {/* </table> */}
                {/* </div> */}
              
        {/* //     </div> */}
        {/* // </div> */}
    </div>  
  );
}

export default Todolist;
