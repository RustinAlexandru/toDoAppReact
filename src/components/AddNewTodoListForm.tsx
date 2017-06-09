import * as React from 'react'

export const AddNewTodoListForm = function AddNewTodoListForm(props) {
    return (
        <div>
            <input type="text" value={props.newListName} onChange={props.onChange}/>
            <button onClick={ () => props.onClick(props.newListName) }> Add new todo list !</button>
        </div>
    )
}

// export {AddNewTodoListForm}