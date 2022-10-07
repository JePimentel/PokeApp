import { createSlice } from "@reduxjs/toolkit"

export const pagSlice = createSlice({
    name: 'changePag',
    initialState: 0,
    reducers: {
        changePag: (state, action) => action.payload
    }
})

export const { changePag } = pagSlice.actions

export default pagSlice.reducer
