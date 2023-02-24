import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './TodosActions.module.css'
import {useDispatch, useSelector} from "react-redux";
import {removeList} from "../../store/todoListReducer";


function TodosActions() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.todoList.todoList)
    const countTodo = state.filter(e => e.isComplete)
    return (
        <div className={styles.todosAction}>
            <button onClick={() => dispatch(removeList())} className={styles.button} title={'Reset Todos'}>
                <RiRefreshLine/>
            </button>
            <button disabled={countTodo.length ? false : true} className={styles.button} title={'Clear completed todos'}>
                <RiDeleteBin2Line/>
            </button>
        </div>
    )
}

export default TodosActions