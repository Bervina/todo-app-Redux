import Todo from "./Todo";
import styles from "./TodoList.module.css"
import {useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';

function TodoList() {
    const todos = useSelector(state => state.todoList.todoList)

    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => <Todo key={uuidv4()}
                                              todo={todo}
                                              index={index}

            />)}
        </div>
    )

}

export default TodoList