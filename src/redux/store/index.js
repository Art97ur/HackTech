import { configureStore } from "@reduxjs/toolkit";
import auth from "../slices/authSlice";
import objectives from "../slices/objectivesSlice";

export const store = configureStore({
  reducer: {
    objectives,
    auth,
  },
});
