import {TodoListAndFormContainer} from "../components/TodoListAndFormContainer";

interface ITodoAppProps {
}

interface ITodoAppState {
    todoLists : Array<TodoListAndFormContainer> ;
}


interface ITodoListAndFormContainerProps {

}

interface ITodoListAndFormContainerState {
    todos: Array<string> ;
    todoTextValue: string;

}