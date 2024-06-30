import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        create: (state, action) => {
            state.push(action.payload)
            return state
        },
        set: (state, action) => action.payload,
        update: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id)
            console.log('index', index);
            if (index !== -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload)
            }
        },
        delete: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state = state.splice(index, 1)
            }
        }
    }
})

export const todoMode = createSlice({
    name: 'mode-todo',
    initialState: 'add',
    reducers: {
        setModeTodo: (state, action) => action.payload
    }
})