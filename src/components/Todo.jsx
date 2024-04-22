import './Todo.css'

function Todo() {
    return <div className='m-3 d-flex justify-content-around'>
        <li className='list-group-item'>This is one LI item</li>
        <button className='rounded card'><img className='iconssize rounded card' src="src\assets\edit.svg" alt="editbtn" /></button>
        <button className='rounded card'><img className='iconssize rounded card' src="src/assets/bin.svg" alt="deletebtn" /></button>
    </div>
}

export default Todo;