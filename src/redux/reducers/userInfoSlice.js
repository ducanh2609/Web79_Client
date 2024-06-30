import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        token: '',
    },
    reducers: {
        login: (state, action) => (action.payload),
        logout: () => ({
            username: '',
            token: '',
        })
    }
})