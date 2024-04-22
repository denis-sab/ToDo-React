import './Todo.css'

function Todo() {
    return <div className='m-3 d-flex justify-content-evenly'>
        <li className='list-group-item card fontstyle'>This is a LI element</li>
        <button className='btn btn-outline-warning'><img className='iconssize' src="src\assets\edit.svg" alt="editbtn" /></button>
        <button className='btn btn-outline-danger'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" /></button>
    </div>
}

export default Todo;