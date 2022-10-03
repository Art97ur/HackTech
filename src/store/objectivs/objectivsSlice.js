import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  objectives: [],
};


export const objectivesSlise = createSlice({
  name: "ObjectivesSlise",
  initialState,
  reducers: {
    setObjectives: (state, action) => {
      state.objectives = action.payload;
    },
  },
});

export const { setObjectives } = objectivesSlise.actions;

export default objectivesSlise.reducer;