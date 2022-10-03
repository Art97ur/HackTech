import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objectives: [],
  hasBeenPosted: false,
};

export const objectivesSlice = createSlice({
  name: "ObjectivesSlice",
  initialState,
  reducers: {
    setObjectives: (state, { payload }) => {
      state.objectives = payload;
    },
    postObjectives: (state, { payload }) => {
      state.hasBeenPosted = payload;
    },
  },
});

export const { setObjectives, postObjectives } = objectivesSlice.actions;

export default objectivesSlice.reducer;
