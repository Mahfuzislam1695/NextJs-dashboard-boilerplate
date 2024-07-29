import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../Reducer/MainSlice";

const store = configureStore({
  reducer: {
    Initial: MainReducer,
  },
});

export default store;
