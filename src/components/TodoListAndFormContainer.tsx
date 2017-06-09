import {AddTodoForm} from './AddTodoForm'
import {TodoList} from './TodoList'
import * as React from 'react'
import {ITodoListAndFormContainerProps, ITodoListAndFormContainerState} from "../interfaces/interfaces";


export class TodoListAndFormContainer extends React.Component<ITodoListAndFormContainerProps, ITodoListAndFormContainerState> {
    constructor(props: ITodoListAndFormContainerProps) {
        super(props)
        this.state = {
            todos: [],
            todoTextValue: "",
        }


        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClickDeleteButton = this.handleClickDeleteButton.bind(this)

    }


    handleClickDeleteButton(item) {
        let newTodos : Array<string> = this.state.todos.slice()
//            const itemToDelete = newTodos.find( (x) => x.props.itemId == id)
//            const itemToDeleteIndex = newTodos.indexOf(itemToDelete)
//            newTodos.splice(itemToDeleteIndex, 1)
        // bug: deletes items with the same name -> delete using id !
        newTodos = newTodos.filter((x) => x != item)
        this.setState({
            todos: newTodos
        })
    }


    handleClick(item) {
        const newTodos: Array<string> = this.state.todos.slice();
        // newTodos.push(<Item value={item} key={newTodos.length + 1} itemId={newTodos.length + 1} onClickDeleteButton={this.handleClickDeleteButton} />)
        newTodos.push(item)
        this.setState({
            todos: newTodos,
            todoTextValue: item,

        })
    }


    handleChange(event) {
        const value : string = event.target.value
        this.setState({
            todoTextValue: value,
        })
    }


    render() {
        return (<div>
                <AddTodoForm todoTextValue={this.state.todoTextValue} onChange={this.handleChange}
                             onClick={this.handleClick}/>
                <TodoList listTodoItems={this.state.todos}
                          handleClickDeleteButton={this.handleClickDeleteButton}/>
            </div>
        );
    }
}

// export {TodoListAndFormContainer}
// export *