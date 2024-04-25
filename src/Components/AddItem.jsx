import './Todo.css'


function AddnewTask ({newTodo, onSubmit, onChange}) {

    return (

    <div className='contclr2'>


        <h4 className="navbarcolor fontstyle2" >Add new task</h4>

      

        < form onSubmit={onSubmit} className="border-succes">
            <textarea 
                name="title" 
                cols="50" 
                rows="5" 
                placeholder="Write your task !"
                value={newTodo.title || ''}
                onChange={onChange}
            />
            <br /> 
            <button className="mb-2 navbarcolor btn btn-primary " type="submit">Add new task </button>
        </form>
    </div>
     
    )
}

export default AddnewTask; 