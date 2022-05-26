import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import messageReducer from "./slices/messageSlice";
import channelReducer from "./slices/channelSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    channel: channelReducer,
  },
});
