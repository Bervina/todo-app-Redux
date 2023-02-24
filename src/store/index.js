import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoListReducer from "./todoListReducer";


const rootReducer = combineReducers({
    todoList:todoListReducer,
})

export const store = configureStore({
    reducer:rootReducer,
})