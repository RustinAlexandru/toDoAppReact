import {AddListButton} from './AddListButton'
import * as React from 'react'
import {TodoListAndFormContainer} from './TodoListAndFormContainer'
import {ITodoAppProps, ITodoAppState} from "../interfaces/interfaces";




export class TodoApp extends React.Component<ITodoAppProps, ITodoAppState> {

    constructor(props: ITodoAppProps) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            todoLists: [],

        }
    }

    handleClick() {
        const newTodoLists: Array<TodoListAndFormContainer> = this.state.todoLists.slice()
        // is this correct to do?
        newTodoLists.push(<TodoListAndFormContainer key={newTodoLists.length + 1} />)
        this.setState({
            todoLists: newTodoLists
        })
    }


    render() {
        return (
            <div>
                <AddListButton onClick={this.handleClick}/>
                { this.state.todoLists}
            </div>
        )
    }
}

