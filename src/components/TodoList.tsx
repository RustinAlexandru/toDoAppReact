import {TodoItem} from './TodoItem'
import * as React from 'react'


export const TodoList = function TodoList(props) {
    return ( <div>
            <ul>
                {props.listTodoItems.map((x, index) => <TodoItem text={x} key={index}
                                                                 itemId={index}
                                                                 onClickDeleteButton={props.handleClickDeleteButton}/>)}
            </ul>
        </div>
    )
}


// export {TodoList}
// export *