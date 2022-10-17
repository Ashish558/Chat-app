import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const { updateIsLoggedIn } = user.actions;
export default user.reducer;
