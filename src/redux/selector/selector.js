import { createSelector } from "@reduxjs/toolkit";


const user = (state) => state.user;
export const getUser = createSelector([user], (user) => {
    return {
        user,
    }
})


const todoList = (state) => state.todoList;
const modeTodo = (state) => state.modeTodo;

export const getTodo = createSelector([todoList, modeTodo], (todoList, modeTodo) => {
    return {
        todoList,
        modeTodo
    }
})
