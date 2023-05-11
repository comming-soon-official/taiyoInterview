import { configureStore } from "@reduxjs/toolkit";
import { contactSlices } from "./slices";

//creating store for all slices
export const store = configureStore({
  reducer: {
    contacts: contactSlices.reducer,
  },
});
