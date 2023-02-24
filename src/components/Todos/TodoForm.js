import {useState} from "react";
import styles from './TodoForm.module.css'
import {useDispatch} from "react-redux";
import {addList} from "../../store/todoListReducer";

function TodoForm() {
    const [text, setText] = useState('')


    const dispatch = useDispatch()
    const onSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(addList(text))
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input placeholder={'Enter new todo'}
                       value={text}
                       onChange={e => setText(e.target.value)}
                />
                <button type={'submit'} title={'Add Todo List'}>Submit</button>
            </form>
        </div>

    )
}

export default TodoForm