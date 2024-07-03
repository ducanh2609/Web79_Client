import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodoList = createAsyncThunk('todo/getTodo', async (token) => {
    const res = await fetch(`http://localhost:8080/todos`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const result = await res.json()
    console.log(result);
    return result;
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        loading: false,
        data: [],
    },
    reducers: {
        create: (state, action) => {
            state.data.push(action.payload)
        },
        set: (state, action) => {
            state.data = action.payload
        },
        update: (state, action) => {
            const index = state.data.findIndex((item) => item._id === action.payload._id)
            console.log('index', index);
            if (index !== -1) {
                state.data[index] = action.payload
            } else {
                state.data.push(action.payload)
            }
        },
        delete: (state, action) => {
            const index = state.data.findIndex((item) => item._id === action.payload)
            console.log('index', index)
            if (index !== -1) {
                state.data.splice(index, 1)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoList.pending, (state) => {
            state.loading = true
        }).addCase(getTodoList.fulfilled, (state, action) => {
            console.log('action', action.payload)
            state.data = action.payload.data
            state.loading = false
        }).addCase(getTodoList.rejected, (state) => {
            state.loading = false
        })
    }
})

export const todoMode = createSlice({
    name: 'mode-todo',
    initialState: 'add',
    reducers: {
        setModeTodo: (state, action) => action.payload
    }
})