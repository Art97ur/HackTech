import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    loginSuccess: [],
  };
  
  
  export const authSlice = createSlice({
    name: "AuthSlise",
    initialState,
    reducers: {
        setLoginSuccess: (state, action) => {
            state.loginSuccess = action.payload;
        }
    },
  });
  
  export const { setLoginSuccess } = authSlice.actions;
  
  export default authSlice.reducer;