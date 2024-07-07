import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "../reducers/userInfoSlice";
import { todoMode, todoSlice } from "../reducers/todoSlice";
import { modePageSlice } from "../reducers/pageSlice";

export const store = configureStore({
    reducer: {
        user: userInfoSlice.reducer,
        todoList: todoSlice.reducer,
        modeTodo: todoMode.reducer,
        modePage: modePageSlice.reducer,
    }
})