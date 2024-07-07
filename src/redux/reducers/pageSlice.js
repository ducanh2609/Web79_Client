import { createSlice } from "@reduxjs/toolkit";

export const modePageSlice = createSlice({
    name: 'pageMode',
    initialState: 'todo',
    reducers: {
        changePage: (state, action) => action.payload
    }
})
