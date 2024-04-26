import './Todo.css';
import { useState } from 'react';

function AddnewTask({ newTodo, onSubmit, onChange}) {

    const formattedDate = newTodo.id ? new Date().toISOString().split('T')[0] : '';

    return (
        <div className='contclr2'>
            <h4 className="navbarcolor fontstyle2">Add new task</h4>

            <form onSubmit={onSubmit} className="form-group m-2 p-3 col">
                <div className='row justify-content-between'>
                    <input 
                        name='title'
                        className='form-control text-center' 
                        type="text" 
                        placeholder='Title' 
                        value={newTodo.title}
                        onChange={onChange}
                    />
                    <input 
                        name='date'
                        className='form-control text-center' 
                        type='date'
                        value={newTodo.date}
                        onChange={onChange}
                    />
                </div>
                <div className='row'>
                    <textarea 
                        name='desc'
                        rows={6}
                        className='text-center shadow form-control'
                        placeholder="Write your task!"
                        value={newTodo.desc}
                        onChange={onChange}
                    />
                    <button className="navbarcolor button fontstyle2 shadow" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddnewTask;