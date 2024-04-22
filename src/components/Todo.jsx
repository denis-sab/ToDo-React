import './Todo.css'

function Todo() {
    return <div className='m-3 d-flex justify-content-evenly'>
        <li className='list-group-item'>This is one LI item</li>
        <button className='rounded card'><img className='iconssize' src="src\assets\edit.svg" alt="editbtn" /></button>
        <button className='rounded card'><img className='iconssize' src="src/assets/bin.svg" alt="deletebtn" /></button>
    </div>
}

export default Todo;