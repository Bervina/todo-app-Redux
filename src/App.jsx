import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

import TodosActions from "./components/Todos/TodosActions";
import {useSelector} from "react-redux";


function App() {
    const todos=useSelector(state=>state.todoList.todoList)
    const completedTodosCount = todos.filter(todo => todo.isComplete).length

    return (
        <div className="App">
            <h1>Todo-App</h1>
            <TodoForm />
            {todos.length?<TodosActions/>:''}
            <TodoList
            />
            {completedTodosCount > 0 && <h2>{`You have completed ${completedTodosCount} 
            ${completedTodosCount > 1 ? 'todos' : 'todo'}`}
            </h2>}
        </div>
    );
}

export default App;
