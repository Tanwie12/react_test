// suing redux toolktit create avariable that manages the theme
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};


const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    Themechanger: (state, action) => {
      state.theme = action.payload;
      
    },
  },
});


export const { Themechanger } = themeSlice.actions;
export const ThemeReducer = themeSlice.reducer;
