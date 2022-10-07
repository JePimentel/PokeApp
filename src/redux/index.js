import { configureStore } from "@reduxjs/toolkit"
import pagSlice from "./slices/pagSlice"
import userSlice from "./slices/userSlice"

export default configureStore({
  reducer: {
    userSlice: userSlice,
    pagSlice: pagSlice
  }
})