import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      //  state.posts=state.posts.filter((p)=>p.id!==action.payload)
      const index = state.posts.findIndex((p) => p.id === action.payload);
      if (index != -1) {
        state.posts.splice(index, 1);
      }
    },
    editPost: (state, action) => {
      const { id, post } = action.payload;
      const index = state.posts.findIndex((p) => p.id === id);
      if (index != -1) {
        state.posts[index] = post;
      }
    },
  },
});
export default postSlice.reducer;
export const { addPost, addPosts, editPost, deletePost } = postSlice.actions;
