import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: 'login',
  initialState: '',
  reducers: {
    changeName: (state, action) => action.payload
  }
})

export const { changeName } = userSlice.actions

export default userSlice.reducer