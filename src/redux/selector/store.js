import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "../reducers/userInfoSlice";
import { todoMode, todoSlice } from "../reducers/todoSlice";

export const store = configureStore({
    reducer: {
        user: userInfoSlice.reducer,
        todoList: todoSlice.reducer,
        modeTodo: todoMode.reducer,
    }
})