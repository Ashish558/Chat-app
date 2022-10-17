import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatRooms: []
};

const chatRooms = createSlice({
  name: "chatRooms",
  initialState,
  reducers: {
    updateChatRooms: (state, { payload }) => {
      state.chatRooms = payload.rooms;
    },
  },
});

export const { updateChatRooms } = chatRooms.actions;
export default chatRooms.reducer;
