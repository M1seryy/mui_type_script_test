import { configureStore } from "@reduxjs/toolkit";
import { authReudcer } from "./slices/auth/index";

export const store = configureStore({
  reducer: {
    // contacts: contactReducer,

    auth: authReudcer,
  },
});
