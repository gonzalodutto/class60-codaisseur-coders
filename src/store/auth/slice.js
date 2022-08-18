import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  loading: false,
};

export const feedSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      // console.log("action", action);
      // const { token, profile } = action.payload
      state.accessToken = action.payload.token;
      state.me = action.payload.profile;
    },
  },
});

export const { userLogin } = feedSlice.actions;

export default feedSlice.reducer;
