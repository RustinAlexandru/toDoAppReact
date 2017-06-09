import * as React from 'react'

export const AddTodoForm = function AddTodoForm(props) {
    return (
        <div>
            <input type="text" value={props.todoTextValue} onChange={props.onChange}/>
            <button onClick={ () => props.onClick(props.todoTextValue) }> Add to list!</button>
        </div>
    )
}

// export {AddTodoForm}
