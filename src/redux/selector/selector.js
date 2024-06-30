import { createSelector } from "@reduxjs/toolkit";


const mode = (state) => state.mode;
export const getMode = createSelector([mode], (mode) => {
    return {
        mode
    }
})