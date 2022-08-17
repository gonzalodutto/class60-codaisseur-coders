import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export const feedSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoadingPost: (state, action) => {
      state.loading = true;
    },
    postFullyFetched: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
    },
  },
});

export const { startLoadingPost, postFullyFetched } = feedSlice.actions;

export default feedSlice.reducer;
