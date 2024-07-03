import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const login = createAsyncThunk('users/login', async (data) => {
    const res = await fetch(`http://localhost:8080/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const result = await res.json()
    console.log(result);
    return result;
});
export const userInfoSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        token: '',
    },
    reducers: {
        // login: (state, action) => (action.payload),
        logout: () => ({
            username: '',
            token: '',
        })
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log('pending');
            state.message = null;
        })
            .addCase(login.fulfilled, (state, action) => action.payload)
            .addCase(login.rejected, (state, action) => {
                console.log((action.action.message));
            })
    }
})