import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/Store";
import {User} from "../../entities/User";

interface CurrentUserState {
  value: User|undefined
}

const getInitialValue = () => {
  let obj = JSON.parse(localStorage.getItem("currentUser") || '{}')
  return Object.keys(obj).length === 0 ? undefined : obj;
}

const initialState: CurrentUserState = {
  value: getInitialValue()
}

export const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User|undefined>) => {
      state.value = action.payload;
    }
  }
});

export const { setCurrentUser } = CurrentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser.value;
export const selectLoggedIn = (state: RootState) => state.currentUser.value !== undefined;
export const selectIsAdmin = (state: RootState) => state.currentUser.value !== undefined && state.currentUser.value.entity.userRole === 2;

export default CurrentUserSlice.reducer;