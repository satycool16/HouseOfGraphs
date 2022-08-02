import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/current_user/CurrentUserSlice";

const Store = configureStore({
  reducer: {
    currentUser: currentUserReducer
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export default Store;
