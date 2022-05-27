import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   value: "Asdf"
};

export const asdfSlice = createSlice({
   name: "asdf",
   initialState,
   reducers: {
      asdf: (state, action) => {
         state.value = action.payload;
      }
   }
});

export const {asdf} = asdfSlice.actions;

export default asdfSlice.reducer;