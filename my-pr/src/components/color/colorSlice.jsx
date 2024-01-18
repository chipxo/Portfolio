import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color1: "#ffffff",
  color2: "#000000",
};

const colorSlice = createSlice({
  name: "colorPicker",
  initialState,
  reducers: {
    addColor: (state, action) => {
      const { color, id } = action.payload;
      if (id === 1) {
        state.color1 = color;
      } else if (id === 2) {
        state.color2 = color;
      }
    },
  },
});

export const { addColor } = colorSlice.actions;

export default colorSlice.reducer;
