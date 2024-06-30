import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
    name: 'mode',
    initialState: '',
    reducers: {
        setMode: (state, action) => (
            action.payload
        )
    }
})