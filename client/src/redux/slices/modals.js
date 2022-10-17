import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createRoomModalActive: false,
  searchRoomsModalActive: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateCreateRoomModal: (state, { payload }) => {
      state.createRoomModalActive = payload;
    },
    updateSearchRoomsModal: (state, { payload }) => {
      state.searchRoomsModalActive = payload;
    },
  },
});

export const { updateCreateRoomModal, updateSearchRoomsModal } = modal.actions;
export default modal.reducer;
