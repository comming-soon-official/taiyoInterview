import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

//initializing states
const initialState = {
  contacts: [],
};

//creating Slice to handle contacts curd operations
export const contactSlices = createSlice({
  name: "contacs",
  initialState: initialState,
  reducers: {
    addContacts: (state, action) => {
      const todo = {
        id: nanoid(),
        fname: action.payload.fname,
        lname: action.payload.lname,
        radio: action.payload.radio,
      };
      state.contacts.push(todo);
    },
    updateContacts: (state, action) => {
      state.contacts = state.contacts.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

//exporting actions
export const { addContacts, deleteContact, updateContacts } =
  contactSlices.actions;
