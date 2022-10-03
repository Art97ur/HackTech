import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setLoginSuccess: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    logout: (state) => {
      console.log("FUNCTION IS CALLED");
      localStorage.clear();
      // localStorage.removeItem("access_token");
      // localStorage.removeItem("refresh_token");
      state.isLoggedIn = false;
    },
  },
});

export const { setLoginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
