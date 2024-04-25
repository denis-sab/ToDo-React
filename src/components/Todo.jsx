import './Todo.css'

function Todo({onDelete, allTodos}) {
    return <>
        {allTodos.map(({ title, id }) => (
        <div key={id} className='mx-4 my-2 row p-2 todostyle'>
            <li key={allTodos} className='col-8 mt-2 list-group-item card fontstyle d-flex align-middle'>{title}</li>
            <div className='col mx-3 d-flex justify-content-end'>
            <button className='mx-2 btn btn-outline-warning'><img className='iconssize' src="src\assets\edit.svg" alt="editbtn" /></button>
            <button onClick={() => onDelete(id)} className='btn btn-outline-danger'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" /></button>
            </div>
            
        </div>
        ))}
    </>
}

export default Todo;