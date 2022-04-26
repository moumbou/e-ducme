import { createSlice } from "@reduxjs/toolkit";
import mongoose from "mongoose";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: [],
  },
  reducers: {
    pushMessage: (state, action) => {
      const id = mongoose.Types.ObjectId().toString();
      const result = Object.assign({ id }, action.payload);
      if (state.message.length >= 4) state.message.shift();
      state.message.push(result);
    },
    deleteMessage: (state, action) => {
      state.message = state.message.filter(
        (value) => !value.id.includes(action.payload)
      );
    },
  },
});

export const { pushMessage, deleteMessage } = messageSlice.actions;
export const selectMessage = (state) => state.message.message;

export default messageSlice.reducer;
