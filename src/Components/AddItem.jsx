

function AddnewTask () {

    return (

    <div className='container bg-warning-subtle w-50   p-3 '>


 <h4 className="bg-danger-subtle form-control border-success w-50 m-auto mb-2 " >Add new task</h4>

      

        < form border-succes action="">

            <label htmlFor=""></label>

            <textarea name="" id="" cols="50" rows="5" placeholder="Write your task !">

            </textarea>

                <br />
                
            <button className="bg-danger-subtle border-warning border-opacity-75 " type="submit">Add new task </button>
            
            </form>

    </div>
     
    )
}

export default AddnewTask; 