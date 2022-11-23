import React from 'react'

function AddTodoForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    //FORM FOR ADDING YOUR TODO ITEM
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>ENTER YOUR TODO</h1>
                <input placeholder='Add Your Todos' name='name' required />
                <button onSubmit={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm