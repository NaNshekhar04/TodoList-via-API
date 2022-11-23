import React from 'react'

const AddTodoForm = ({addTodo}) => {


  

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target.name.value);
        e.target.name.value = "";
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