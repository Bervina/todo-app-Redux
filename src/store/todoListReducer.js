import {createSlice} from "@reduxjs/toolkit";


const todoListReducer = createSlice({
    name: 'todoList',
    initialState: {
        todoList: [],
    },
    reducers: {
        addList(state, action) {
            state.todoList.push({text: action.payload, isComplete: false})
        },
        removeList(state) {
            state.todoList = []
        },
        removeTodo(state, action) {
            state.todoList = state.todoList.filter((e, i) => i !== action.payload)
        },
        complete(state, action) {
            state.todoList.map((el, i) => {
                return i === action.payload ? el.isComplete = !el.isComplete : el.isComplete
            })
        }
    }
})

export default todoListReducer.reducer
export const {addList, removeList, removeTodo, complete} = todoListReducer.actions