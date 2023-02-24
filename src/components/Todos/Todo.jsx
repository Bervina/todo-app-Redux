import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import styles from './Todo.module.css'
import {FaCheck} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {removeTodo, complete} from "../../store/todoListReducer";


function Todo({todo, index}) {
    const dispatch = useDispatch()

    return (
        <div className={`${styles.todo} ${todo.isComplete ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line onClick={() => dispatch(removeTodo(index))} className={styles.deleteIcon}/>
            <FaCheck onClick={() => dispatch(complete(index))} className={styles.checkIcon}/>
        </div>
    )
}

export default Todo