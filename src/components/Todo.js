import React from "react";

function Todo({ id, title, onAdd, onDelete }) {


    const handleAddTodo = () => {
        onAdd()
    }


    const handleDelete = () => {
        onDelete(id);
    }


    return (
        <div className='list'>
            <div className="listItems">
                <label>
                    <input type="checkbox" />
                    {handleAddTodo}
                    {title}
                </label>
            </div>
            <span>
                <div className="buttons">
                    <button id='edit'>Edit</button>
                    <button id='delete' onClick={handleDelete}>Delete</button>
                </div>
            </span>
        </div>
    )
}
export default Todo