import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    addToken: (state, action) => {
      console.log(action, "slice");
      state.token = action.payload;
    },
  },
});
export const { addToken } = authSlice.actions;
export default authSlice.reducer;
