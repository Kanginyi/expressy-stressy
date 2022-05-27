import {configureStore} from "@reduxjs/toolkit";
import asdfReducer from "../Redux/Features/asdfSlice";

export default configureStore({
   reducer: {
      asdf: asdfReducer,
   }
});