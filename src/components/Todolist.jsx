import Todo from './Todo.jsx';

function Todolist() {
  return (
    <div>
      {/* <div classname='vh-100'> */}
       
        {/* <div classname='container'>
          <div classname='row '>
            <div classname='col '> */}
             
        
                  <h4 className='navbarcolor fontstyle2'>To Do List</h4>
                  {/* <table classname='table table-bordered '> */}
                    
                      <Todo />
             



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
