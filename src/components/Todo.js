import React from 'react'


function Todo({ title }) {
    return (
        <div className='list'>
            <div className="listItems">
                <label>
                    <input type="checkbox" />
                    {title}
                </label>
            </div>
            <span>
                <div className="buttons">
                    <button id='edit'>Edit</button>
                    <button id='delete'>Delete</button>
                </div>
            </span>
        </div>
    )
}
export default Todo