import Todo from './Todo.jsx';
import React from 'react';
import { useState } from 'react';

function Todolist({allTodos, onDelete,}) {
  return (
    <div>
      {/* <div classname='vh-100'> */}
       
        {/* <div classname='container'>
          <div classname='row '>
            <div classname='col '> */}
             
        
             <h4 className='navbarcolor fontstyle2'>To Do List</h4>
              {allTodos.map(({ id, title, date, desc}) => (
                <div key={id} className='mx-4 my-2 row p-2 todostyle'>
                  <div className='col-8 mt-2 list-group-item card fontstyle align-middle'>
                    <span className=''><strong>{title}</strong></span>- - - - -<span className='fontstyle'><em>{date}</em></span>- - - - -<span>{desc}</span>
                  </div>
                  <div className='col mx-3 d-flex justify-content-end'>
                    <button className='mx-2 btn btn-outline-warning'><img className='iconssize' src="src\assets\edit.svg" alt="editbtn" /></button>
                    <button onClick={() => onDelete(id)} className='btn btn-outline-danger'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" /></button>
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
