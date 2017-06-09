import * as React from 'react'
import {DeleteItemButton} from './DeleteItemButton'

export const TodoItem = function TodoItem(props) {
    return (
        <li className="TodoItem">
            {props.text}
            <DeleteItemButton itemToDeleteId={props.text} onClick={props.onClickDeleteButton}/>
        </li>
    )
}

// export {TodoItem}
// export *