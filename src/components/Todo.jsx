import './Todo.css'

function Todo() {
    return <div className='mx-4 p-2 d-flex justify-content-evenly  todostyle'>
        <li className='list-group-item card fontstyle pt-2'>This is a LI</li>
        <button className='btn btn-outline-warning'><img className='iconssize' src="src\assets\edit.svg" alt="editbtn" /></button>
        <button className='btn btn-outline-danger'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" /></button>
    </div>
}

export default Todo;