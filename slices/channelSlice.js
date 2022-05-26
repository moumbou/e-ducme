import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    value: null,
  },
  reducers: {
    setChannel: (state, action) => {
      state.value = action.payload;
    },
    resetChannel: (state) => {
      state.value = null;
    },
  },
});

export const { resetChannel, setChannel } = channelSlice.actions;
export const getChannel = (state) => state.channel.value;

export default channelSlice.reducer;
