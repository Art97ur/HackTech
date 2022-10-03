import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authentication/authSlice";
import objectivesSlise from "./objectivs/objectivsSlice";

const store = configureStore({
  reducer: {
    objectives: objectivesSlise,
    auth: authSlice,
  },
});

export default store;
